App.Views.TaskView = function (task) {
    this.elem = document.createElement('div');

    var tplsStr = document.getElementById('taskTemplate').innerHTML;

    this.editTask = function() {
        var newTaskTitle = prompt("Please, enter a new name of task: ");
        task.set('title', newTaskTitle);
        utils.mediator.publish('collectionChange', this.collection); // TODO: Change it to render just one model.
    };

    this.destroy = function () {
        utils.mediator.publish('modelRemoved', task.attributes.id);
        this.remove();
    }.bind(this);

    this.remove = function() {
        this.elem.innerHTML = "";
    };

    this.render = function() {
        this.elem.innerHTML = utils.template(tplsStr, {title: task.attributes.title});

        utils.attacheListeners(this.elem, {
            'click .edit': this.editTask,
            'click .delete': this.destroy
        });

        return this;
    }.bind(this);

    utils.mediator.subscribe('modelChange', this.render);

};