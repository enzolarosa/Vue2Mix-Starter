require('./bootstrap');
var VueResource = require('vue-resource');
var VueRouter = require('vue-router');
var VueMaterial = require('vue-material');
var Vuex = require('vuex');

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(Vuex);

Vue.component('starter', require('./components/Starter.vue'));
Vue.component('login', require('./components/Login.vue'));


const app = new Vue({
    el: '#app'
});
