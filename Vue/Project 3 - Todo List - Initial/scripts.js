const vueTodoApp = "vueTodoApp";
const resetTodoItem = () => {
    return {
        text: null,
        done: false
    }
};
const todoList = [];
const newTodo = resetTodoItem();

const todoListApp = {
    data() {
        return {
            todoList: todoList,
            newTodo: newTodo
        }
    },
    created() {
        this.todoList = window.localStorage.getItem(vueTodoApp)
            ? JSON.parse(localStorage.getItem(vueTodoApp)) : this.todoList;
    },

    updated() {
        window.localStorage.setItem
        (vueTodoApp, JSON.stringify(this.todoList));
    },

    methods: {
        addItem: function () {
            if (this.newTodo.text) {
                this.todoList.push({
                    title: this.newTodo.text,
                    done: false
                });
                this.newTodo = resetTodoItem();
            } else
                window.alert("Include a  text");
        },
        clearAllItems: function () {
            this.todoList = [];
        }
    }
}

Vue.createApp(todoListApp).mount("#app");