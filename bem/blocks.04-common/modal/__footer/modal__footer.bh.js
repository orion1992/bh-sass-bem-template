module.exports = function (bh) {
    bh.match('modal__footer', function (ctx, json) {
        ctx.cls('modal__footer-custom')
    })
}
