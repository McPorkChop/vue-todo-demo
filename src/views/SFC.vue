<template>
    <form
        class="todo-form"
        @submit.prevent="add"
    >
        <input
            v-model="item"
            class="todo-form-input"
            type="text"
            autocomplete="false"
        >
        <button
            type="submit"
            class="todo-form-submit"
        >
            新增
        </button>
    </form>
    <ul class="todo-list">
        <li
            v-for="(todo, index) in todos"
            :key="todo.id"
            class="todo-list-item"
            :class="{ 'todo-list-item__done': todo.state == 1 }"
            @click="done(todo)"
        >
            <h3>{{ todo.content }}</h3>
            <button
                class="todo-list-item-del"
                type="button"
                @click="del(index)"
            />
        </li>
    </ul>
</template>

<script setup="prop,context" lang="ts">
    import { computed, ref } from "vue";
    import { useStore } from "vuex";
    import Todo from "../model/todo";
    const store = useStore();
    export const todos = computed(() => store.getters.todos);
    export const item = ref("");
    export function add(): void {
        if (!item.value) return;
        store.commit("ADD", item.value);
        item.value = "";
    }
    export function done(todo: Todo): void {
        todo.state = todo.state ? 0 : 1;
    }
    export function del(index: number): void {
        store.commit("REMOVE", index);
    }
</script>
