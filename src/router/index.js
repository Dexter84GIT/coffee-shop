import Vue from 'vue'
import VueRouter from 'vue-router'

import HeroView from '@/views/HeroView.vue'
import OurCoffeeView from '@/views/OurCoffeeView.vue'
import ForYourPleasureView from '@/views/ForYourPleasureView.vue'
import ContactUsViews from '@/views/ContactUsView.vue'
import ThankYouView from '@/views/ThankYouView.vue'
import GoodsItemView from '@/views/GoodsItemView.vue'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {

  return originalPush.call(this, location).catch(err => err)

}

const routes = [
    { path: '/', component: HeroView },
    { path: '/our-coffee', component: OurCoffeeView },
    { path: '/goodview', component: ForYourPleasureView },
    { path: '/contacts', component: ContactUsViews },
    { path: '/thank-you', component: ThankYouView },
    { name: 'coffee', path: '/our-coffee/:id', component: GoodsItemView },
    { name: 'goods', path: '/goodview/:id', component: GoodsItemView },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router