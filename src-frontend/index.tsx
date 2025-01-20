import { createApp, type App as VueApp, type VueElement } from 'vue';
import { ConfigProvider, App } from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import './entry/main.tailwindcss.css';
import InitialState from './components/InitialState/InitialState.vue';
import Index from './pages/Index/Index.vue';

/* app */
const app: VueApp<Element> = createApp((): VueElement => (
  <ConfigProvider locale={ zhCN }>
    <App>
      <InitialState>
        <Index />
      </InitialState>
    </App>
  </ConfigProvider>
));

app.mount('#app');