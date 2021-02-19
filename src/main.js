import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Homepage from './components/Homepage'
import AddBottle from './components/AddBottle'
import Bottle from './components/Bottle'
import Cellar from './components/Cellar'
import DegustationBook from './components/DegustationBook'
import LastAdd from './components/LastAdd'
import Login from './components/Login'
import NextOne from './components/NextOne'
import SignUp from './components/SignUp'
import Suggestion from './components/Suggestion'

Vue.use(VueRouter)
Vue.config.productionTip = false

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Homepage },
    { path: '/ajouter', component: AddBottle },
    { path: '/details', component: Bottle },
    { path: '/ma-cave', component: Cellar },
    { path: '/carnet-degustation', component: DegustationBook },
    { path: '/dernier-ajout', component: LastAdd },
    { path: '/connexion', component: Login },
    { path: '/prochaine', component: NextOne },
    { path: '/inscription', component: SignUp },
    { path: '/suggestion', component: Suggestion }

  ]
});



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
