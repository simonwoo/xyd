import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: { type: 'hash' },
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
        { exact: true, path: '/materials', component: '@/pages/list' },
        { exact: true, path: '/technologies', component: '@/pages/list2' },
      ],
    },
  ],
});
