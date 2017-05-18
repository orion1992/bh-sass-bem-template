module.exports = function(bh) {

    bh.match('page__browsehappy', function(ctx, json) {
        return {
            elem : 'conditional-comment',
            condition : '< IE 8',
            content : json
        };
    });

};
