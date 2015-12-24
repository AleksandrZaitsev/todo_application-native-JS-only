var startApp = function  () {
    var titleContainer = document.getElementById('titleContainer'),
        addContainer = document.getElementById('addContainer'),
        taskContainer = document.getElementById('taskContainer');

    var tasksCollection = new App.Collections.TasksCollection([{
            title: 'Go shopping',
        }, {
            title: 'Recieve an email',
        }, {
            title: 'To go to work',
        }]);

    access.addCollection('TasksCollection', tasksCollection);

    var titleView = new App.Views.TitleView(),
        addView = new App.Views.AddView(),
        tasksView = new App.Views.TasksView();

    utils.mediator.subscribe('taskAdded', function () {
        taskContainer.innerHTML = '';
        taskContainer.appendChild(tasksView.render().elem);
    });

    titleContainer.innerHTML = titleView.render().elem.innerHTML;
    addContainer.appendChild(addView.render().elem);
    taskContainer.appendChild(tasksView.render().elem);

    utils.mediator.subscribe('modelRemoved', tasksCollection.deleteItem);
    utils.mediator.subscribe('collectionChange', tasksView.render);

};