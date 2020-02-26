import Vue from 'vue'
import App from './App.vue'

import VueFullPage from 'vue-fullpage.js/dist/vue-fullpage'
import 'fullpage.js/vendors/scrolloverflow'
import 'fullpage.js/dist/fullpage.css'

Vue.config.productionTip = false;

Vue.use(VueFullPage);

new Vue({
  render: h => h(App),
}).$mount('#app');
