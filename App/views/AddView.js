App.Views.AddView = function () {
    this.elem = document.createElement('div');

    this.addTask = function(evn) {
        var input = document.querySelectorAll('input[type=text]')[0];
        var newTaskTitle = input.value;
        var newTask = new App.Models.Task({title: newTaskTitle});
        access.getCollection('TasksCollection').addItem(newTask);
        input.value = '';

        evn.preventDefault();
        evn.stopPropagation();
        return false;
    }

    this.render = function() {
        this.elem.innerHTML = document.getElementById('addTemplate').innerHTML;

        utils.attacheListeners(this.elem, {
            'click #add': this.addTask,
        });

        return this;
    }
}