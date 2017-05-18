module.exports = function (bh) {
    bh.match('input', function (ctx, json) {

        var params = json.params ? json.params : false,
            mixFLB = json.mixFLB ? json.mixFLB : false;
        var box = (params.box != undefined) ? params.box : true;

        if ( box == false ) { //Если обёртка в div не нужна
            return {
                tag:'input',
                elem:'field',
                mix: mixFLB.fieldMix,
                attrs: {
                    name: json.name,
                    value: json.content,
                    placeholder: params.placeholder
                }
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
                        tag:'input',
                        elem:'field',
                        attrs: {
                            id: json.id,
                            placeholder: params.placeholder,
                            value: params.value,
                            name: json.name,
                            autocomplete: "off"
                        },
                        mix: mixFLB.fieldMix //микс поля
                    },
                    ( params.errorMsg ) ? { //Если нужен вывод ошибки
                        elem:'error-msg',
                        content: params.errorMsg
                    } : '',
                    (json.yandexSearch) ? json.yandexSearch : '', //Для полей поиска улиц по Яндексу
                    json.content
                ], true)
                .mix( mixFLB.boxMix ) //микс обёртки
        }
    })
}

