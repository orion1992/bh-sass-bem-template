module.exports = function (bh) {
    bh.match('row_clear', function (ctx) {
        var oldCls = ctx.cls() || '';
        ctx.cls(oldCls + ' ' + 'row_clear', true)
    });

}