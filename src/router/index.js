import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/Index';
import ComponentViewer from '@/pages/ComponentViewer';
import { getWhitelistedComponents } from '@/tachyon-components/tachyon-components';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/component/:componentName',
      name: 'ComponentViewer',
      component: ComponentViewer,
      props: true,
      beforeEnter(to, _, next) {
        const { componentName } = to.params;
        const exists = getWhitelistedComponents().some(
          x => x === componentName,
        );

        if (exists) {
          next();
        } else {
          // TODO: 404
          next('/');
        }
      },
    },
  ],
});
