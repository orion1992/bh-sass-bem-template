module.exports = function (bh) {
    bh.match('tabs__tab-link', function (ctx, json) {

        ctx
            .tag('li')
            .content({
                tag:'a',
                attrs: !json.fake ? { 'aria-controls': json.tab, role:'tab', 'data-toggle': 'tab', href: '#' + json.tab } : { href:'#'},
                content: json.content
            }, true)

    })
}