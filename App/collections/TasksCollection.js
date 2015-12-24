App.Collections.TasksCollection = function (tasksCollection) {
    (function initialize (TasksCollection) {
        var model = App.Models.Task;
        TasksCollection.collection = [];

        tasksCollection.forEach(function (task) {
            var newModel = new model(task);
            newModel.attributes.id = TasksCollection.collection.length+1;
            TasksCollection.collection.push(newModel);
        }, TasksCollection);
    })(this);

    this.addItem = function (item) {
        item.attributes.id = this.collection.length+1;
        this.collection.push(item);

        utils.mediator.publish('collectionChange', this.collection.length);
    };

    this.deleteItem = function (id) {
        var index;
        this.collection.forEach(function (mod) {
            if (mod.attributes.id === id) {
                index = this.collection.indexOf(mod);
                this.collection.splice(index, index+1);
            }
        }, this)
    }.bind(this);

    this.each = function (callback, context) {
        this.collection.forEach(callback, context);
    };

}