// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import Vue from 'vue';
import MarkdownIt from 'markdown-it';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.prototype.$md = new MarkdownIt({
  html: true,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
