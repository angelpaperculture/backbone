const TodoItemsView = Backbone.View.extend({
    tagName: 'ul',
    id: "todoItems",

    initialize: function(options){
        if(!(options && options.model))
            throw new Error("model is not specified");
    },

    render: function (){
        const self = this;
        this.model.each(function (todoItem){
            const view = new TodoItemView({ model: todoItem });
            self.$el.append(view.render().$el)
        })
        return this;
    }
})












