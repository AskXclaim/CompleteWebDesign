const resetTodoItem = () => {
    return {
        title: null,
        done: false
    }
};
const todoList = [];
const aTodoItem = resetTodoItem();

const todoListApp = {
    data() {
        return {
            todoList: todoList,
            aTodoItem: aTodoItem
        }
    },
    methods: {
        addItem: function () {
            if (this.aTodoItem.title) {
                this.todoList.push({
                    title: this.aTodoItem.title,
                    done: false
                });
                this.aTodoItem = resetTodoItem();
            } else
                window.alert("Include a  text");
        },
        clearAllItems: function () {
            this.todoList = [];
        }
    }
}

Vue.createApp(todoListApp).mount("#app");