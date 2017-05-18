// Глобальные переменные и API JS
// Данный файл будет автоматически подключен в начало собранного js-файла


(function (top) {
    "use strict";

    // Словарь для хранения переменных проекта.
    // Переменные и API могут быть переопределены полностью или частично через
    // >> window.projectConfig = {...}
    // >> window.projectAPI = {...}
    // до загрузки объединенного JS

    var defaultConfig = {
        //'demo-variable': 'demo-value'
    };

    var defaultAPI = {
        //'demo-func': function () {
        //}
    };

    // Функция для рекурсивного объединения двух объектов
    var deepExtend = function (out) {
        out = out || {};

        for (var i = 1; i < arguments.length; i++) {
            var obj = arguments[i];

            if (!obj)
                continue;

            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (typeof obj[key] === 'object')
                        out[key] = deepExtend(out[key], obj[key]);
                    else
                        out[key] = obj[key];
                }
            }
        }

        return out;
    };

    top.projectConfig = deepExtend(defaultConfig, top.projectConfig);
    top.projectAPI = deepExtend(defaultAPI, top.projectAPI);


})(window.top || window);