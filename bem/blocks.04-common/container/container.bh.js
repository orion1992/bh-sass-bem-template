module.exports = function(bh) {

    bh.match('container', function(ctx, json) {
        // Хак для корректно работы fluid: false при замене классов
        // Нужен потому что container и container-fluid не совместимы на одной DOM-ноде
        // ctx.tag('section')
        ctx.mod('fluid', 'off')
    });

};
