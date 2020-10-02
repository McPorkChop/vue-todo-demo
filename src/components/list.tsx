import Todo from "@/model/todo";
import { defineComponent, PropType } from "vue";
import { useStore } from "vuex";
import { useTodoInject, useTodoProvider } from "../hooks/TodoContext";

const TodoItem = defineComponent({
    name: "TodoItem",
    props: {
        state: Number,
        id: String,
        content: String
    },
    setup(props, { emit }) {
        let { state, content } = props;
        let handleRemove: (index: number) => void;
        const handleClick = function () {
            state = props.state ? 0 : 1;
            emit("done", props);
        };
        try {
            const { remove } = useTodoInject();
            handleRemove = remove;
        } catch {
            handleRemove = () => {
                emit("todo-remove");
            };
        }
        return {
            state,
            content,
            handleClick,
            handleRemove
        };
    },
    render() {
        return (
            <>
                <li
                    class="todo-list-item"
                    v-bind-class={{
                        "todo-list-item__done": this.state == 1
                    }}
                    onClick={this.handleClick}
                >
                    <h3>{this.content}</h3>
                    <button
                        class="todo-list-item-del"
                        type="button"
                        onClick={this.handleRemove}
                    />
                </li>
            </>
        );
    }
});
const todoList = defineComponent({
    name: "TodoList",
    props: {
        list: {
            type: Array as PropType<Todo[]>,
            required: true
        }
    },
    setup(props) {
        const store = useStore();
        let handleRemove: Function;
        try {
            const { remove } = useTodoInject();
            handleRemove = remove;
        } catch (err) {
            useTodoProvider();
            handleRemove = function (index: number) {
                debugger;
                console.log(index);
                store.commit("REMOVE", index);
            };
        }
        const list = props.list || [];
        return () => (
            <>
                <ul class="todo-list">
                    {list.map((todo, index) => (
                        <TodoItem
                            {...todo}
                            onTodo-remove={handleRemove.bind(this, index)}
                        />
                    ))}
                </ul>
            </>
        );
    }
});

export default todoList;
