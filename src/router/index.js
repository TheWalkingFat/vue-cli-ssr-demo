import vueRouter from "vue-router";
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld";
import About from "@/components/About";

Vue.use(vueRouter);
export default () => {
  return new vueRouter({
    mode:"history",
    routes:[
      {
        path:"/",
        component:HelloWorld,
        name:"HelloWorld"
      },
      {
        path:"/about",
        component:About,
        name:"About"
      }
    ]
  })
}