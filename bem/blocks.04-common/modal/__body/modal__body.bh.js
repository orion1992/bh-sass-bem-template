module.exports = function (bh) {
    bh.match('modal__body', function (ctx, json) {
        ctx.cls('modal__body-custom')
    })
}
