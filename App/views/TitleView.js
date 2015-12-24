App.Views.TitleView = function () {
    this.elem = document.createElement('h1');

    this.render = function() {
        this.elem.innerHTML = "<span>Tasks to do:</span>";
        return this;
    }
};