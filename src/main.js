import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import AppText from './components/Shared-components/AppText'
import "./assets/styles/main.scss";
import './plugins/media/media-mixin'
import "./plugins/vee-validate/index";
import "./plugins/click-outside"
import { VueMaskDirective } from "v-mask";

Vue.config.productionTip = false
Vue.component('AppText', AppText);
Vue.directive("mask", VueMaskDirective);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
