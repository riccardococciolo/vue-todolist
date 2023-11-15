const {createApp} = Vue;

createApp ({
    data () {
        return {
            newTodo: {
                text: "",
                done: false,
            },
            todos: [],
        }
    },
    methods: {
        addTodo () {
            this.todos.push({...this.newTodo})
            this.newTodo.text = "";
        },
        delate (index) {
            this.todos.splice(index, 1);
        },
        crossedOut (index) {
            if (this.todos[index].done === false) {
                this.todos[index].done = true;
            } else {
                this.todos[index].done = false;
            }
        }
    }
}).mount("#app");