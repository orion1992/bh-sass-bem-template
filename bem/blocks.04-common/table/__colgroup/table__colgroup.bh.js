module.exports = function (bh) {
    bh.match('table__colgroup', function (ctx, json) {
        ctx.tag('colgroup')
    })
}
