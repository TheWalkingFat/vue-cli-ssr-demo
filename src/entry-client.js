import createApp from "./app.js";
let {app,router} = createApp();

router.onReady(() => {
    app.$mount("#app");
});