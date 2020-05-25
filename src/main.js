import Vue from "vue";
import store from "./store";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

let app;
// if (!store.getters.isLogged) {
if (!app) {
  app = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
}
// }
