module.exports = function (bh) {
    bh.match('content', function (ctx, json) {
        ctx.tag('main')
    })
}
