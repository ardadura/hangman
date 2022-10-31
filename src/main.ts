import { createApp, reactive } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "nprogress/nprogress.css";

const pinia = createPinia();
const GStore = reactive({ flashMessage: "" });

createApp(App).use(router).use(pinia).provide("GStore", GStore).mount("#app");
