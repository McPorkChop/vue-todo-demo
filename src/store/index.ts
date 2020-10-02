import { createStore } from "vuex";
import Todo, { create } from "../model/todo";
export default createStore({
    state: { todos: new Array<Todo>() },
    getters: {
        todos: state => state.todos
    },
    mutations: {
        ADD(state, content: string) {
            state.todos.push(create(content));
        },
        REMOVE(state, index: number) {
            state.todos.splice(index, 1);
        }
    }
});
