module.exports = function (bh) {
    bh.match('row__col_hidden-md', function (ctx, json) {
        var oldCls = ctx.cls() || '';
        ctx.cls(oldCls + ' ' + 'hidden-md', true)
    });
}
