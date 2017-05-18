module.exports = function (bh) {
    bh.match('button', function (ctx, json) {
        var submit = (json.type == 'submit') ? true : false,
            link = (json.type == 'link' )? true : false;

        if (submit) {
            ctx.tag('button')
            ctx.attrs({
                type:'submit'
            })
        } else if (link) {
            ctx.tag('a')
            ctx.attrs({
                href: json.url ? json.url : "#"
            })
        } else {
            ctx.tag('button')
        }

    })
}