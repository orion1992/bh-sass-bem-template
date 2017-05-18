module.exports = function (bh) {
    bh.match('row__col', function (ctx, json) {
        var oldCls = ctx.cls() || '',
            val = parseInt(json.elemMods['xs-pull']);
        if (val > 0 && val <= 12) {
            ctx.cls(oldCls + ' ' + 'col-xs-pull-' + val, true)
        }
    });
};
