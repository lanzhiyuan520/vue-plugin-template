import Vue from 'vue'

import App from './src/App.vue'

// import lanButton from './src/components/button'

import lanButton from 'lan-button'

Vue.use(lanButton)

new Vue({
  render: h => h(App)
}).$mount('#app')
