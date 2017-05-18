module.exports = function (bh) {
    bh.match('modal__content', function (ctx, json) {
        ctx.cls('modal__content-custom')
    })
}
