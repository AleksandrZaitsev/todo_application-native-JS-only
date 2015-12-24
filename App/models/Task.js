App.Models.Task  = function (params) {
    this.attributes = params;

    this.set = function (key, val) {
            this.attributes[key] = val;
            utils.mediator.publish('modelChange', this.attributes.id);
    };

};
