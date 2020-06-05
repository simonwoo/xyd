import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { exact: true, path: '/', redirect: '/home' },
        { exact: true, path: '/home', component: '@/pages/home' },
        { exact: true, path: '/tencel', component: '@/pages/tencel' },
        { exact: true, path: '/list', component: '@/pages/list' },
      ],
    },
  ],
});
