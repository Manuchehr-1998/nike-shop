import { createApp } from "vue";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import App from "./App.vue";
import "./assets/style.css";

const app = createApp(App);
app.use(autoAnimatePlugin);

app.mount("#app");
