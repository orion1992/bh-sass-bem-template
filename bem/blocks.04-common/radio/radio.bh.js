module.exports = function (bh) {
    bh.match('radio', function (ctx, json) {
        ctx
            .tag('label')
            .content([
                {
                    tag:'input',
                    attrs: {
                        id: json.name,
                        name: json.name,
                        type:'radio',
                        checked: json.checked
                    }
                },
                {
                    content: '<span class="radio__field"></span><p class="radio__label-text">' + json.label + '</p>'
                }
            ],true)
            .mix(json.mixFLB ? json.mixFLB.boxMix : '')


    })
}
