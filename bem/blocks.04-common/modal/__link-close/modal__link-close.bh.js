module.exports = function (bh) {
    bh.match('modal__link-close', function (ctx, json) {
        ctx
            .tag('a')
            .attrs({
                rel:'nofollow',
                class:'close',
                'data-dismiss': 'modal',
                'aria-label': 'close'
            })

    })
}
