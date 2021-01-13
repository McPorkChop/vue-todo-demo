import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
    {
        path: "/sfc",
        name: "SFC",
        component: () => import("../views/SFC.vue")
    },
    {
        path: "/options",
        name: "Options",
        component: () => import("../views/options-based.vue")
    },
    {
        path: "/composition",
        name: "Composition",
        component: () => import("../views/composition-ts.vue")
    },
    {
        path: "/function",
        name: "Function",
        component: () => import("../views/function-based.vue")
    },
    {
        path: "/tsx",
        name: "tsx",
        component: () => import("../views/tsx-based")
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
});
