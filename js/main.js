
$(document).ready(function (){
    const todoItems = new TodoItems();
    todoItems.fetch();

    const todoItemsView = new TodoItemsView({ model: todoItems });

    $("body").append(todoItemsView.render().$el);
})