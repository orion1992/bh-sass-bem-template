module.exports = function (bh) {
    bh.match('img', function (ctx, json) {
        ctx.tag('img')
        ctx.attrs({
            src: json.src
        })
    })
}
