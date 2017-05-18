module.exports = function (bh) {
    bh.match('row__col_hidden-xs', function (ctx, json) {
        var oldCls = ctx.cls() || '';
        ctx.cls(oldCls + ' ' + 'hidden-xs', true)
    });
}
