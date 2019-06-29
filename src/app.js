import Vue from "vue";
import createRouter from "./router";
import App from "./App.vue";

export default (context) => {
  const router = createRouter();
  const app = new Vue({
    router,
    components: { App },
    template: '<App/>'
  });
  return {
    app,
    router
  }
}