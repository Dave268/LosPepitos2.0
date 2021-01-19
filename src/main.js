import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faHome, faSmileBeam, faLeaf, faPaperPlane, faTheaterMasks, faImages, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue2TouchEvents from 'vue2-touch-events'
 
Vue.use(Vue2TouchEvents);

library.add(faEnvelope, faHome, faSmileBeam, faLeaf, faPaperPlane,faTheaterMasks, faImages, faChevronRight);
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
