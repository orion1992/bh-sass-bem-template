
module.exports = function (bh) {
    bh.match('table__col', function (ctx, json) {
        ctx.tag('col')
    })
}
