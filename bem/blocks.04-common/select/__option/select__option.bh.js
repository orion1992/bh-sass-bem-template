module.exports = function (bh) {
    bh.match('select__option', function (ctx, json) {
        ctx.bem(false)
            .tag('option')
            .attrs({
                value: json.value,
                selected: ctx.mod('selected'),
                disabled: ctx.mod('disabled'),
                hidden:   ctx.mod('hidden')
            })
    });
};
