import { defineComponent } from "vue";
import { form } from "../hooks/TodoAppend";
interface FormProps {
    placeholder?: string;
}

export default defineComponent({
    name: "TodoForm",
    setup(props: FormProps, { emit }) {
        const { placeholder } = props;
        return () => (
            <form
                class="todo-form"
                onSubmit={(e: Event) => {
                    e.preventDefault();
                    if (!form.value) return;
                    emit("add", form.value);
                    form.value = "";
                }}
            >
                <input
                    value={form.value}
                    class="todo-form-input"
                    type="text"
                    autocomplete="false"
                    placeholder={placeholder}
                    onChange={(e: Event) => {
                        form.value = (e.target as HTMLInputElement).value.trim();
                    }}
                />
                <button type="submit" class="todo-form-submit">
                    新增
                </button>
            </form>
        );
    }
});
