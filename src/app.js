import Vue from 'vue';

import App from './App.vue';
import List from "./components/list.vue";
import Add from "./components/add.vue";

// 全局注册
Vue.component('listBook',List);
Vue.component('addBook',Add);

new Vue({
    el: '#app',
    render: c => c(App)
});