module.exports = function (bh) {
    bh.match('row__col', function (ctx, json) {
        ctx
            .bem(false);
    })
}
