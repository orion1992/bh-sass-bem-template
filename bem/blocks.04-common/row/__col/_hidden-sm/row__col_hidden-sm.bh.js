module.exports = function (bh) {
    bh.match('row__col_hidden-sm', function (ctx, json) {
        var oldCls = ctx.cls() || '';
        ctx.cls(oldCls + ' ' + 'hidden-sm', true)
    });
}
