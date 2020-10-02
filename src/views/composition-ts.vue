<template>
    <todo-list :list="list" />
    <todo-form @add="handleAdd" />
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { useStore } from "vuex";
    import TodoForm from "../components/form";
    import TodoList from "../components/list";

    export default defineComponent({
        components: {
            TodoForm,
            TodoList
        },
        setup() {
            const store = useStore();
            return {
                list: store.getters.todos,
                handleAdd(content:string){
                    store.commit("ADD",content);
                }
            };
        }
    });
</script>

<style scoped></style>
