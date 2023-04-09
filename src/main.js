import { createApp } from "vue";
import router from "./router/index";
import store from "./store/index";
// import "./style.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(ElementPlus);
import "virtual:windi.css";
app.mount("#app");
