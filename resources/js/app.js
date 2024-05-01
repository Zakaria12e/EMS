import { createApp } from 'vue/dist/vue.esm-bundler.js';
import { createRouter, createWebHistory } from 'vue-router';
import  Routes from './routes.js';
import 'flowbite';
import VueTailwindDatepicker from "vue-tailwind-datepicker";





const app = createApp({});

const router = createRouter({

    history: createWebHistory(),

    routes : Routes,

});

app.use(router);
app.use(VueTailwindDatepicker);


app.mount('#app');


