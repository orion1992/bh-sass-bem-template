module.exports = function (bh) {
    bh.match('modal__header', function (ctx, json) {
        ctx.cls('modal__header-custom')
    })
}
