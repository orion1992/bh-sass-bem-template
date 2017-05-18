var fs = require('fs'),
    path = require('path'),
    gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    cleanCss = require('gulp-cleancss'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    zip = require('gulp-zip');

// Сжатие картинок
// SVG намеренно опущены, т.к. часто используются для шрифтов
gulp.task('minify_images', function () {
    return gulp.src([
            '**/*.{png,jpg,jpeg,gif}',
            '!**/*node_modules*/**',
            '!**/*gemini*/**',
            '!**/*font*/**',
            '!**/docs/**'
        ])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(gulp.dest('./'));
});

// Минификация скриптов
gulp.task('minify_scripts', function () {
    return gulp.src('node_modules/bootstrap-sass/assets/javascripts/bootstrap/*.js')
        .pipe(uglify({preserveComments: 'license'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('node_modules/bootstrap-sass/assets/javascripts/bootstrap/'));
});


// Минификация стилей
gulp.task('minify_styles', function () {
    return gulp.src(['node_modules/jquery-ui/themes/base/*.css', '!**/*.min.css'])
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('node_modules/jquery-ui/themes/base/'));
});


// Сборка Modernizr
gulp.task('build_modernizr', function (cb) {
    // Подключение плагина перенесено внутрь данной редко вызываемой задачи,
    // чтобы сэкономить время при обычном запуск проекта
    var modernizr = require(path.join(process.cwd(), 'node_modules', 'modernizr', 'lib', 'cli')),
        config = require(path.join(process.cwd(), 'modernizr'));

    config.minify = true;
    config.options = config.options.filter(function (item) {
        return item !== 'html5shiv' && item !== 'html5printshiv';
    });

    modernizr.build(config, function (output) {
        fs.writeFile(path.join(process.cwd(), 'node_modules', 'modernizr', 'modernizr-custom.min.js'), output, cb);
    });
});


// Сборка html5shiv и respond
gulp.task('minify_html5shivrespond', function () {
    return gulp.src(['node_modules/html5shiv/dist/html5shiv.min.js',
            'node_modules/respond/dest/respond.matchmedia.addListener.min.js'])
        .pipe(concat('html5shiv-respond.min.js'))
        .pipe(gulp.dest('node_modules/html5shiv/'));
});


// Создание production-архива
gulp.task('make_index', function (cb) {
    var html = ['<!DOCTYPE HTML>'];
    html.push('<html>');
    html.push('<head>');
    html.push('<meta charset="utf-8" />');
    html.push('    <title>3b-project</title>');
    html.push('    <style>');
    html.push(
        'body {' +
        '  margin: 0;' +
        '  padding: 80px 100px;' +
        '  font: 13px "Helvetica Neue", "Lucida Grande", "Arial";' +
        '  background: #fff;' +
        '  background-repeat: no-repeat;' +
        '  color: #555;' +
        '  -webkit-font-smoothing: antialiased;' +
        '}'
    );
    html.push(
        'h1 {' +
        '  margin: 0;' +
        '  font-size: 60px;' +
        '  color: #343434;' +
        '}'
    );
    html.push(
        'h2 {' +
        '  margin: 40px 0px 10px;' +
        '  font-size: 20px;' +
        '  color: #343434;' +
        '}'
    );
    html.push(
        'a {' +
        '  color: #555;' +
        '}' +
        'a:hover {' +
        '  color: #303030;' +
        '}'
    );
    html.push(
        'ul {' +
        '  margin: 0;' +
        '  padding: 0;' +
        '}' +
        'ul li {' +
        '  margin: 5px 0;' +
        '  list-style: none;' +
        '  font-size: 16px;' +
        '}' +
        'ul li a:before {' +
        '  display: inline-block;' +
        '  width: 16px;' +
        '  height: 16px;' +
        '  background: url(data:image/png;base64,' +
            'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0ElEQVR42o2TzwqCQBCHfaneplOHrj1AB5+' +
            'iNwg6R50Cjd4ggv4JhXfB27IK5uRvQNjGdseBjx1m5/cpghERMXEc0wiWHRHocz+Cuq7JWjugqipXsvAKUF' +
            'mWSTBGsD8/HTOvIM9zSR90sV5BURQDRLHEKyjLMoQuMMYw1/PtX68L8MUP24SmkzndL0+AHjPc6YJkd0SAz' +
            '6ZpgDsLC16PNy+uVxsShRnusBN+g3R/wiKfXMOZVyADeBoQQl2AQlD2ukApXYCfqW3bENjxC8biCr5jjTCh' +
            'qbabBgAAAABJRU5ErkJggg==);' +
        '  margin-right: 5px;' +
        '  content: "";' +
        '  vertical-align: bottom;' +
        '}'
    );
    html.push('    </style>');
    html.push('</head>');
    html.push('<body>');
    html.push('<h1>3b-project</h1>');

    var glob = require("glob");
    var pages = new glob.sync('bem/pages/*/*.beauty.html');
    if (pages.length > 0) {
        html.push('<h2>Доступные страницы:</h2>');
        html.push('<ul>');

        html.push(pages.map(function (page) {
          var title = page;

          try {
            var content = fs.readFileSync(page);
            var match = /<title>(.+?)<\/title>/g.exec(content);
            title = match[1];
          }
          catch (e) {}

          return '<li><a href="' + page + '">' + title + '</a></li>';
        }).join(''));

        html.push('</ul>');
    } else {
        html.push('Нет доступных страниц');
    }

    html.push('</body>');
    html.push('</html>');





    fs.writeFile('index.html', html.join(''), cb);
});


// Создание production-архива
gulp.task('make_archive', function () {
    var name = path.basename(__dirname),
        now = (new Date()).toISOString().replace('T', '___').replace(/\./g, '___').replace(/:/g, '-');

    return gulp.src([
            '**/*',
            '!node_modules',
            '!node_modules/**/*',
            '!.git',
            '!.git/**/*',
            '!.enb/tmp',
            '!.enb/tmp/**/*',
            '!.idea',
            '!.idea/**/*',
            '!**/*.DS_Store',
            '!.DS_Store'
        ], {dot: true})
        .pipe(zip(name + '-' + now + '.zip'))
        .pipe(gulp.dest('../'));
});

gulp.task('postinstall', [
    'minify_images',
    'minify_scripts',
    'minify_styles',
    'build_modernizr',
    'minify_html5shivrespond'
]);
