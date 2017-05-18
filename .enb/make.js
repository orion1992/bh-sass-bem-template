var fs = require('fs'),
    path = require('path'),
    production = process.env.YENV ? process.env.YENV.trim() === 'production' : false,
    config = require('../config'),
    languages = config.languages,
    responsive = config.responsive,
    replacements = config.replacements,
    levels = config.levels,
    browsers = config.browsers,
    mergedBundle = process.env.YENV === 'mergedbundle',
    merged = require('./techs/merged');

/**
 * Windows-фикс для путей в конфиге БЭМ-уровней
 */
levels = levels.map(function (level) {
    if (typeof level === 'object') {
        level.path = level.path.replace(/(\/|\\)/g, path.sep);
    } else {
        level = level.replace(/(\/|\\)/g, path.sep);
    }
    return level;
});


/**
 * Техники используемые для сборки
 */
var techs = {
    // базовые техники
    fileProvider: require('enb/techs/file-provider'),
    enbBemTechs: require('enb-bem-techs'),

    // html
    bemjsonToBemdecl: require('./techs/bemjson-to-bemdecl'),
    bhCommonjs: require('./techs/bh-commonjs'),
    bemjsonToHtml: require('./techs/bemjson-to-html'),
    beautifyHtml: require('./techs/beautify-html'),

    // css, js
    cssSass: require('./techs/css-sass'),
    jsIncludes: require('./techs/js-includes')
};

/**
 * Пути используемые в сборке
 */
var pagesPath = path.join('bem', 'pages'),
    pagesPathMask = path.join('bem', 'pages', '*'),
    mergedPath = path.join('bem', 'pages', '_merged'),
    globalsJsPath = path.join('bem', 'globals', 'globals.js'),
    globalsScssPath = path.join('bem', 'globals', 'globals.scss'),
    disableLintIds = ['W005'];
if (responsive !== true) {
    disableLintIds.push('W003');
}

/**
 * Настройка сборки
 */
module.exports = function (config) {

    if (mergedBundle) {
        // Создаем директорию для merged-бандла
        try {
            fs.statSync(mergedPath);
        }
        catch (e) {
            fs.mkdirSync(mergedPath);
        }
        merged(config, mergedPath);

    }
    /*--------------------------------------------------new new new--------------------------------------------------*/
    config.nodes(pagesPathMask, function(nodeConfig) {
        var node = path.basename(nodeConfig.getPath());
        if (node === '_common') {
            return;
        }

        if (mergedBundle) {
            var isMergedNode = path.basename(nodeConfig.getPath()) === '_merged';

            isMergedNode || nodeConfig.addTechs([
                [techs.fileProvider, { target: '?.bemjson.js' }],
                [techs.bemjsonToBemdecl],
            ]);

            nodeConfig.addTechs([
                // essential
                [techs.enbBemTechs.levels, {levels: levels}],
                [techs.enbBemTechs.deps],
                [techs.enbBemTechs.files],

            ]);
        } else {
            if (node === '_merged') {
                return;
            }
            nodeConfig.addTechs([
                // essential
                [techs.fileProvider, {target: '?.bemjson.js'}],
                [techs.bemjsonToBemdecl],
                [techs.enbBemTechs.levels, {levels: levels}],
                [techs.enbBemTechs.deps],
                [techs.enbBemTechs.files],
            ]);
        }

        if (node !== '_merged') {
            nodeConfig.addTechs([

                // html
                [techs.bhCommonjs, {
                    bhFilename: require.resolve('./lib/bh.js'),
                    bhOptions: {
                        soloveyDev: !production,
                        production: production,
                        responsive: responsive,
                        replacements: replacements,
                        jsAttrName: 'data-bem',
                        jsAttrScheme: 'json'
                    }
                }],
                [techs.bemjsonToHtml],
                [techs.beautifyHtml, {
                    sourceTarget: '?.html',
                    destTarget: '?.beauty.html',
                    disableLintIds: disableLintIds

                }]
            ]);
        }
        nodeConfig.addTechs([
            // css, js
            [techs.cssSass, {
                sass: {outputStyle: 'expanded'},
                responsive: responsive,
                globals: [globalsScssPath],
                autoprefixer: {browsers: browsers}
            }],
            [techs.jsIncludes, {
                globals: [globalsJsPath]
            }]
        ]);

        if (node !== '_merged') {
            nodeConfig.addTarget('?.beauty.html');
        }

        nodeConfig.addTargets([
            '?.css',
            '?.js'
        ]);

    });
};
