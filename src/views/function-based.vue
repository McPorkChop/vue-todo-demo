<template>
    <todo-list :list="list" />
    <todo-form @add="handleAdd" />
</template>

<script lang="ts">
    import { computed, defineComponent } from "vue";
    import { useTodoInject, useTodoProvider } from "../hooks/TodoContext";
    import TodoList from "../components/list";
    import TodoForm from "../components/form";
    export default defineComponent({
        components: {
            TodoList,
            TodoForm
        },
        setup() {
            useTodoProvider();
            const { get, add } = useTodoInject();
            const list = computed(() => get());
            return {
                list,
                handleAdd: add
            };
        }
    });
</script>

<style lang="scss" scoped></style>
