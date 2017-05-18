module.exports = function (bh) {
    bh.match('modal__dialog', function (ctx, json) {
        ctx.cls('modal__dialog-custom')
    })
}
