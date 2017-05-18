module.exports = function (bh) {
    bh.match('tabs__nav', function (ctx, json) {
        ctx
            .tag('ul')
            .cls('nav nav-tabs')
            .attrs ({
                role: 'tablist'
            })
    })
}