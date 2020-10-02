<template>
    <!-- class based api 已被弃用，最高仅支持到Vue2 -->
    <div class="todo-wrapper">
        <!-- <form
            class="todo-form"
            @submit.prevent="add"
        >
            <input
                v-model="item"
                class="todo-form-input"
                type="text"
                autocomplete="false"
            />
            <button
                type="submit"
                class="todo-form-submit"
            >新增</button>
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
        </ul> -->
    </div>
</template>

<script lang="ts">
    // import Todo from '@/model/todo';
    // import { Component, Vue } from "vue-property-decorator";

    // @Component
    // export default class ClassBased extends Vue{
    // private value:string="";
    // get todos(){
    //     return this.store.getters.todos;
    // }
    // add(){
    //     if(!this.value)return;
    //     this.store.commit("ADD",this.value);
    //     this.value="";
    // },
    // done(todo:Todo){
    //     todo.state=todo.state?0:1;
    // },
    // del(index:number){
    //     this.store.commit("REMOVE",index);
    // }
    // }
</script>

<style lang="scss" scoped></style>
