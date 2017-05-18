module.exports = function (bh) {
    bh.match('row__col_hidden-lg', function (ctx, json) {
        var oldCls = ctx.cls() || '';
        ctx.cls(oldCls + ' ' + 'hidden-lg', true)
    });
}
