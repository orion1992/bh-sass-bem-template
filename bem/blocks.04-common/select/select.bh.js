module.exports = function (bh) {
    bh.match('select', function (ctx, json) {

        var params = json.params ? json.params : false,
            mixFLB = json.mixFLB ? json.mixFLB : false;
        var box = (params.box != undefined) ? params.box : true;

        if ( box == false ) { //Если обёртка в div не нужна
            return {
                tag:'select',
                elem:'field',
                mix: mixFLB.fieldMix,
                content: json.content
            }
        }
        else { //Если обёртка в div нужна
            ctx
                .content([
                    ( params.label ) ? { //Если нужен label
                        tag:'label',
                        elem:'label',
                        attrs: {
                            for: json.name
                        },
                        mods: { required: params.required ? params.required : ''},
                        mix: mixFLB.labelMix, //микс label
                        content: params.required ? params.label + '<sup>*</sup>': params.label
                    } : '',
                    {
                        tag:'select',
                        elem:'field',
                        attrs: {
                            name: json.name ? json.name : '',
                            multiple: params.multiple,
                            id:json.id,
                            placeholder: params.placeholder ? params.placeholder : ''
                        },
                        mix: mixFLB.fieldMix, //микс поля
                        content: json.content.map(function (item) {
                            return {
                                elem:'option',
                                attrs: { selected: (item.selected == true) ? 'selected' : false},
                                content: item.content
                            }
                        })
                    },
                    ( params.errorMsg ) ? { //Если нужен вывод ошибки
                        elem:'error-msg',
                        content: params.errorMsg
                    } : ''
                ], true)
                .mix( mixFLB.boxMix ) //микс обёртки
        }
    })
}

