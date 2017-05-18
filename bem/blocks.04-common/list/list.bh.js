module.exports = function (bh) {
    bh.match('list', function (ctx, json) {
        var tag = ctx.mod('type') == 'ordered' ? 'ol' : 'ul',
            styleLine = ctx.mod('style') == 'line' ? ' – ' : false
        ctx
            .tag(tag)
            .content([
                json.content.map(function (item) {
                    return {
                        tag:'li',
                        mix: json.mixElems ? json.mixElems : '',
                        cls: item.cls,
                        elem:'elem',
                        content: styleLine ?  styleLine + item.content : item.content
                    }
                })
            ], true)
    })
}
