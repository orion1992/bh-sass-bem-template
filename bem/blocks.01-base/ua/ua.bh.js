module.exports = function(bh) {

    bh.match('ua', function(ctx) {
        ctx.bem(false)
            .tag('script')
            .attr('data-skip-moving', 'true')
            .content([
                '/* beautify preserve:start */',
                '!function(e,t,c,o){var n=t[c].className;n=n.replace(/no-js/g,"js"),n+="ontouchstart"in e||void 0!==e.DocumentTouch&&t instanceof DocumentTouch?" touch":" no-touch",t[o]&&t[o]("http://www.w3.org/2000/svg","svg").createSVGRect&&(n+=" svg"),t[c].className=n}(window,document,"documentElement","createElementNS");',
                '/* beautify preserve:end */'
            ], true);
    });

};

// Исходный скрипт
// (function(window, document, documentElement, createElementNS){
//     var htmlClasses = document[documentElement].className;
//
//     /* no-js -> js */
//     htmlClasses = htmlClasses.replace(/no-js/g, 'js');
//
//     /* no-touch <-> touch */
//     if ('ontouchstart' in window || window.DocumentTouch !== undefined && document instanceof DocumentTouch) {
//         htmlClasses += ' touch';
//     } else {
//         htmlClasses += ' no-touch';
//     }
//
//     /* -> svg */
//     if (document[createElementNS] && document[createElementNS]('http://www.w3.org/2000/svg', 'svg').createSVGRect) {
//         htmlClasses += ' svg';
//     }
//
//     document[documentElement].className = htmlClasses;
// })(window, document, 'documentElement', 'createElementNS');


//     Не включено
//     /* no-modern <-> modern (Opera 10.5, FF 3.5, Chrome 4, IE 9, Safari 4) */
//     if ('querySelector' in document && 'localStorage' in window && 'addEventListener' in window) {
//         htmlClasses += ' modern';
//     } else {
//         htmlClasses += ' no-modern';
//     }
