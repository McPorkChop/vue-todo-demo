import "normalize.css";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/main.scss";
import router from "./route";
import state from "./store";

createApp(App).use(router).use(state).mount("#app");
