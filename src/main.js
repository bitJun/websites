import { createApp } from 'vue';
import './style.css';
import Vant from 'vant';
import App from './App.vue';
import 'vant/lib/index.css';
import 'amfe-flexible';
import router from './routes';
import VueClipboard from 'vue3-clipboard'

const app = createApp(App);
app.use(VueClipboard, {
  autoSetContainer: true,
  appendToBody: true,
}).use(router).use(Vant).mount('#app');