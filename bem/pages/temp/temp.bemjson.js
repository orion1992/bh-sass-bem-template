module.exports = {
    block: 'page',
    title: '',
    head: [
        {
            elem: 'meta',
            attrs : { name : 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
            attrs:{ name: 'format-detection', content: 'telephone=no' }
        }
    ],
    styles: [{elem: 'css', url: '../_merged/_merged.css'}
    ],

    scripts: [
        {elem: 'js', url: '../_merged/_merged.js'}
    ],
    content: [
        {
            block:'header',
            content: [
                require('../_common/header-content.bemjson.js')
            ]
        },
        {
            block: 'content',
            content:
            [
                {

                    block: 'container',
                    mods: { 'fluid':'off' },
                    content: [
                        {
                            block:'oMind-library-examples',
                            content: [
                                {
                                    elem:'equal-height',
                                    content: 'Lorem ipsum'
                                },
                                {
                                    elem:'equal-height',
                                    content: 'Lorem ipsum Lorem ipsum'
                                },
                                {
                                    elem:'equal-height',
                                    content: 'Lorem ipsum Lorem ipsum Lorem ipsum'
                                },
                                {
                                    elem:'equal-height',
                                    content: 'Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsum'
                                },
                                {
                                    elem:'equal-height',
                                    content: 'Lorem ipsum Lorem ipsum'
                                },
                                {
                                    elem:'equal-height',
                                    content: 'Lorem ipsum Lorem ipsum Lorem ipsum'
                                },
                                {
                                    elem:'equal-height',
                                    content: 'Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsum'
                                }
                            ]
                        }

                    ]

                },

            ]
        },
        {
            block:'footer',
            content: [
                require('../_common/footer-content.bemjson.js')
            ]
        }
    ]
};
