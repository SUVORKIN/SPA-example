import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vueResource from 'vue-resource'

Vue.use(vueResource)
Vue.use(router)

const app = new Vue({
    router,
    render(h) {
        return h(App);
    },
});

app.$mount(document.querySelector('#app'));
