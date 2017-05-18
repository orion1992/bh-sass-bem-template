module.exports = function (bh) {
    bh.match('checkbox', function (ctx, json) {
        var mixFLB = json.mixFLB ? json.mixFLB : '';
            ctx
                .content([
                    {
                        tag:'input',
                        attrs: {
                            id: json.name,
                            placeholder: json.placeholder,
                            name: json.name,
                            type:'checkbox',
                            checked: json.checked
                        }
                    },
                    {
                        tag:'label',
                        elem:'label',
                        attrs: {
                            for: json.name
                        },
                        mix: mixFLB.labelMix ? mixFLB.labelMix : '',
                        content: '<span></span><p class="checkbox__label-text">' + json.label + '</p>'
                    }
                ],true)
                .mix(mixFLB.boxMix ? mixFLB.boxMix : '')


    })
}