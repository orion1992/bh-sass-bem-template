module.exports = function (bh) {
    bh.match('tabs__tab-panel', function (ctx, json) {
        var active = json.active ? 'active in':''

        ctx
            .cls('tab-pane fade ' + active)
            .attrs({
                id: json.id,
                role:'tabpanel'
            })
    })
}