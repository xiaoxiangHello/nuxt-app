import Vue from 'vue'
import axios from 'axios'
import VueJsonp from 'vue-jsonp'
import vueLazyImg from '../assets/lazy-img.js'
import '../assets/base.css'
import MetaInfo from 'vue-meta-info'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;


Vue.use(VueJsonp);
Vue.use(vueLazyImg);
Vue.use(MetaInfo);
Vue.use(VueResource);
