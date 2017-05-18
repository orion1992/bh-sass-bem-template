module.exports = function (bh) {
    bh.match('row__col', function (ctx, json) {
        var oldCls = ctx.cls() || '',
            val = parseInt(json.elemMods['sm-pull']);
        if (val > 0 && val <= 12) {
            ctx.cls(oldCls + ' ' + 'col-sm-pull-' + val, true)
        }
    });
};
