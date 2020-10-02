/// vue2.0 中流行到options 写法
<template>
    <div class="todo-wrapper">
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
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
        data() {
            return {
                item: ""
            };
        },
        computed:mapGetters(
            ["todos"]
        ),
        methods: {
            add() {
                if (!this.item) return;
                this.$store.commit("ADD", this.item);
                this.item = "";
            },
            done(todo) {
                todo.state = todo.state ? 0 : 1;
            }
        },
        del(index) {
            this.$store.commit("REMOVE", index);
        }
    };
</script>

<style lang="scss" scoped></style>
