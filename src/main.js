// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Footer from './components/footer/Footer.vue'
import Alert from './components/alert/Alert.vue'
import axios from 'axios'
import '../static/validate.js'
const URL = 'http://192.168.1.162'
import SMEditor from 'smeditor'
import $ from 'jquery'

// Vue.use($);
Vue.use(SMEditor);
Vue.prototype.$axios = axios;
Vue.component('Footer', Footer);
Vue.component('Alert', Alert);
Vue.component('SMEditor', SMEditor);
Vue.config.productionTip = false;
//封装的路由跳转函数
Vue.prototype.go = function (name, params) {
    router.push({name: name, params: params})
};

// 网络请求封装函数
Vue.prototype.http = function (url, data) {
    url = URL + url;
    var that = this;
   var xhrFields={withCredentials: true};
    return new Promise((suc, fail) => {
        that.$axios.post(
            url,
           data,
          xhrFields
           ,{
                transformRequest: [function (data) {
                    // 对 data 进行任意转换处理
                    let ret = '';
                    for (let it in data) {
                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    return ret   // return this.$qs.stringify(data);
                }],
                headers: {"Content-Type": 'application/x-www-form-urlencoded;charset=UTF-8'},

          },
            ).then(function (res) {
            console.log(res);
            suc(res)
        });
    })
};

new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
