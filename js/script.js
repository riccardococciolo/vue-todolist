const {createApp} = Vue;

createApp ({
    data () {
        return {
            newTodo: {
                text: "",
            },
            todos: [],
        }
    },
    methods: {
        addTodo () {
            this.todos.push({...this.newTodo})
            this.newTodo.text = "";
        }
        delate
    }
}).mount("#app");