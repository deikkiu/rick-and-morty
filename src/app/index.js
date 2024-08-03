import { createApp } from 'vue';
import router from '@/router/router';
import App from '@/app/App.vue';

import './style.css';

const app = createApp(App);

app.use(router);
app.mount('#app');
