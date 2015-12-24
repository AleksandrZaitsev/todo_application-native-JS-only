var utils = {
    template: function (str, values) {
        var result = str.trim();

        for (var value in values) {
            result = result.replace('{{' + value + '}}', values[value]);
        }

        return result;
    },

    attacheListeners: function (elem, events) {
        for (var event in events) {
            var splitted = event.split(' '),
                eventType = splitted[0],
                element = splitted[1];

            var target = elem.querySelectorAll(element)[0];
            target.addEventListener(eventType, events[event], false);
        }
    },

    mediator: function () {
        var stack = {};

        return {
            subscribe: function (event, callback) {
                if (!stack[event]) {
                    stack[event] = [];
                }

                stack[event].push(callback);
            },

            publish: function (event, params) {
                stack[event].forEach(function (callback) {
                    callback(params);
                });
            },

            unsubscribe: function (event) {
                var index;
                stack.forEach(function (evn) {
                    if (evn === event) {
                        stack[evn] = null;
                        index = stack.indexOf(evn);
                        stack.splice(index, index+1);
                    }
                }, this)
            }
        };
    }()

}