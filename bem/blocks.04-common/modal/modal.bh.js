module.exports = function (bh) {
    bh.match('modal', function (ctx, json) {
        ctx.cls('fade')
        ctx.attrs({
            class:'fade',
            id: json.id,
            role:'dialog',
            'tab-index':'-1'
        })
        ctx.content([
            {
                elem:'dialog',
                mods: json.size,
                attrs: {
                    class:'modal__dialog modal-dialog',
                    role:'document'
                },
                content: [
                    {
                        elem:'content',
                        attrs: {
                            class:'modal-content'
                        },
                        content:[
                            json.content
                        ]
                    }
                ]
            }
        ], true)
    })
}
