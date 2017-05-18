module.exports = function (bh) {

    bh.match('page', function (ctx, json) {
        var config = require('../../../config'),
            languages = config.languages;

        var options = ctx.bh.getOptions(),
            responsive = options.responsive === true ? true : false,
            lang = json.lang || languages[0],
            noscriptWarning = json.noscriptWarning || 'В вашем браузере отключен JavaScript. Многие элементы сайта могут работать некорректно.'


        json.favicons = json.favicons || [
                {elem: 'favicon', href: '../../../favicons/touch-icon-180x180-iphone-6-plus.png', size: '180x180'},
                {elem: 'favicon', href: '../../../favicons/touch-icon-152x152-ipad-retina.png', size: '152x152'},
                {elem: 'favicon', href: '../../../favicons/touch-icon-120x120-iphone-retina.png', size: '120x120'},
                {elem: 'favicon', href: '../../../favicons/touch-icon-76x76-ipad.png', size: '76x76'},
                {elem: 'favicon', href: '../../../favicons/touch-icon-57x57-iphone.png', size: '57x57'},
                {elem: 'favicon', href: '../../../favicons/favicon-32x32.png', size: '32x32'},
                {elem: 'favicon', href: '/favicon.ico', size: '16x16'},
            ];

        ctx.bem(false)
            .tag('body')
            .tParam('lang', lang)
            .tParam('responsive', responsive)
            .content([
                '<!--noindex-->',
                {elem: 'noscript', content: noscriptWarning},
                '<!--/noindex-->',
                ctx.content(),
                {block: 'deferred-body-strings', tag: ''},
                json.scripts
            ], true);

        return [
            '<!DOCTYPE html>',
            {
                elem: 'head',
                content: [
                    {elem: 'meta', attrs: {charset: 'utf-8'}},
                    {elem: 'meta', attrs: {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'}},
                    responsive ? {
                        elem: 'meta',
                        attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1'}
                    } : '',
                    {elem: 'meta', attrs: {name: 'format-detection', content: 'telephone=no'}},
                    {elem: 'meta', attrs: {name: 'SKYPE_TOOLBAR', content: 'SKYPE_TOOLBAR_PARSER_COMPATIBLE'}},
                    {tag: 'title', content: json.title},
                    json.head,
                    {block: 'ua'},
                    json.styles,
                    {block: 'deferred-head-strings', tag: ''},
                    {
                        tag:'link',
                        attrs:{
                            rel:"shortcut icon",
                            href:"/favicon_.ico",
                            type:"image/x-icon"
                        }
                    },
                    // {
                    //     tag:'link',
                    //     attrs:{
                    //         rel:"icon",
                    //         href:"/favicon.ico",
                    //
                    //     }
                    // },
                    {
                        tag:'link',
                        attrs: {
                            rel:'stylesheet',
                            href:'../../../fonts/fonts.css'
                        }
                    },
                    {
                        tag:'link',
                        attrs: {
                            rel:'stylesheet',
                            href:'../../../fonts/font-awesome/css/font-awesome.min.css'
                        }
                    }

                ]
            },
            json,
            '</html>'
        ];
    });

};
