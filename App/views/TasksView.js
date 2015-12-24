App.Views.TasksView = function() {
    var collection = access.getCollection('TasksCollection');
    this.elem = document.createElement('div');

    this.render = function() {
        if (collection) {
            this.elem.innerHTML = '';
            collection.each(this.addOne, this);
        }

        return this;
    }.bind(this);

    this.addOne = function(task) {
        var taskView = new App.Views.TaskView(task, collection);
        this.elem.appendChild(taskView.render().elem); 
    };

};