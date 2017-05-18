module.exports = function (bh) {
    bh.match('modal__link', function (ctx, json) {
        ctx.tag('a')
        ctx.attrs({
            href: json.popup,
            'data-toggle': 'modal',
            'data-target': json.popup
        })
    })
}
