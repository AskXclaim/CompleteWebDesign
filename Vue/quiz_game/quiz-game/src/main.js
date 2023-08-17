import { createApp, isProxy, toRaw } from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App).use(VueAxios, axios).use(isProxy, toRaw).mount("#app");
