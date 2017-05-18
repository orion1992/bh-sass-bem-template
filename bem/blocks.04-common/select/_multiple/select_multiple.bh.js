module.exports = function(bh) {
    bh.match('select_multiple', function(ctx) {
        ctx.attrs({
            multiple: true
        })

    });
};
