require('./bootstrap');
var VueResource = require('vue-resource');

Vue.use(VueResource);

Vue.component('starter', require('./components/Starter.vue'));

const app = new Vue({
    el: '#app'
});
