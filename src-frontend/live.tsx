import { createApp, type App as VueApp, type VueElement } from 'vue';
import { ConfigProvider, App } from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import * as dayjs from 'dayjs';
import 'dayjs/esm/locale/zh-cn.js';
import './entry/main.tailwindcss.css';
import InitialState from './components/InitialState/InitialState.vue';
import Live from './pages/Live/Live.vue';

dayjs.locale('zh-cn');

/* app */
const app: VueApp<Element> = createApp((): VueElement => (
  <ConfigProvider locale={ zhCN }>
    <App>
      <InitialState>
        <Live />
      </InitialState>
    </App>
  </ConfigProvider>
));

app.mount('#app');