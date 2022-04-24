import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-plus'
import "element-plus/theme-chalk/index.css"
import  Vue from 'vue'

createApp(App).use(store).use(router).use(Element).mount('#app')
