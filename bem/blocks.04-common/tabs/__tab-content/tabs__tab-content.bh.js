module.exports = function (bh) {
    bh.match('tabs__tab-content', function (ctx, json) {
        ctx.cls('tab-content')
    })
}