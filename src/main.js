import { createApp } from 'vue'
import './assets/index.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
import './assets/index.css';
import router from './router';
import 'normalize.css';

const app = createApp(App)
app.use(Antd)
app.use(router)
app.mount('#app')



