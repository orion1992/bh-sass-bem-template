module.exports = function (bh) {
    bh.match('link', function (ctx, json) {
        ctx
            .tag('a')
            .attrs({
                href: json.url
            })

    })
}
