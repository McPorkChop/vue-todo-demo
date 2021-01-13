<template class="app">
    <h1 class="app-title">
        Todo
    </h1>
    <div class="app-tabs">
        <router-link
            to="/options"
            class="app-tab-link"
        >
            Options-based
        </router-link>
        <router-link
            to="/composition"
            class="app-tab-link"
        >
            Composition
        </router-link>
        <router-link
            to="/function"
            class="app-tab-link"
        >
            Function-based
        </router-link>
        <router-link
            to="/sfc"
            class="app-tab-link"
        >
            SFC
        </router-link>
        <router-link
            to="/tsx"
            class="app-tab-link"
        >
            TSX
        </router-link>
    </div>
    <div class="app-content">
        <router-view />
    </div>
</template>

<script setup>
import { useTodoProvider } from "./hooks/TodoContext";

useTodoProvider
</script>
