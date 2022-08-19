
$(document).ready(function (){
    const todoItems = new TodoItems([
        new TodoItem({ description: "TODO ITEM 1" }),
        new TodoItem({ description: "TODO ITEM 2" })
    ]);

    const todoItemsView = new TodoItemsView({ model: todoItems });

    $("body").append(todoItemsView.render().$el);
})