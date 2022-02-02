import { createApp } from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import FloatingVue from "floating-vue";

import App from "./App.vue";
import store from "./store";

import "@/assets/default.scss";
import "floating-vue/dist/style.css";

library.add(faCalculator);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(FloatingVue)
  .mount("#app");
