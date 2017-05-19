;(function () {
    var self = {};

    self.core = function () {
        var _methods = {},
            _helpers = {
                currentResolution: document.documentElement.clientWidth,

            },
            _messages = {
                nodePresenseFuncArgError: "INVALID FUNCTION ARGUMENT, SECOND ARGUMENT MUST BE AN ANONYMOUS FUNCTION"
            }

        self.core.prototype._methods = {

            /**
             * This function checking dom node existance, and if it is exist, function
             * return domCollection as this, for work;
             * @param domElem
             * @param func
             * @returns {boolean}
             */
            nodePresense: function (domElem, func) {
                if ((typeof func != 'function')&&(typeof func != 'undefined')) {
                    throw _messages.nodePresenseFuncArgError;
                    return;
                }
                var elems = document.querySelectorAll(domElem),
                    length = elems.length,
                    func = func || function(){return true};

                return length > 0 ?
                    (length == 1) ?
                        func.call(elems[0]) :
                        func.call(elems)
                    : [];
            },


            actionDelay: function (func, ms) {
                var actionStarted = false;
                if (!actionStarted) {

                    actionStarted = true;
                    setTimeout(function () {
                        actionStarted = false;
                    }, ms)
                }

            }
        }

        for (var key in self.core.prototype._methods) {
            _methods[key] = function() {
                return self.core.prototype._methods[key].apply(null, arguments);
            }
        }

        return _methods;
    }
    window.nGaleUIX = self.core();
}());