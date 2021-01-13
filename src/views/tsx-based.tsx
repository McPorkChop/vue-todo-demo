import { computed, defineComponent } from "vue";
import TodoForm from "../components/form";
import TodoList from "../components/list";
import { useTodoInject, useTodoProvider } from "../hooks/TodoContext";
export default defineComponent({
    name: "TsxBased",
    setup() {
        useTodoProvider();
        const { get, add } = useTodoInject();
        const list = computed(() => {
                debugger;
                return get();
            }),
            handleAdd = function (context: string) {
                console.log(context);
                add(context);
            };
        return () => (
            <>
                <TodoForm onAdd={handleAdd} placeholder="新增todo" />
                <TodoList list={list.value} />
            </>
        );
    }
});
