import { createApp } from "vue";
import App from "./App.vue";
import { mainStoreKey, store } from "./store";
import "./index.css";

createApp(App).use(store, mainStoreKey).mount("#app");
