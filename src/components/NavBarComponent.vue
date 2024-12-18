<template>
    <header>
        <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
            <li class="header__item">
                <router-link :to="links[0].link">
                    <img :src="require(`@/assets/logo/${links[0].icon}`)" :alt="links[0].icon">
                </router-link>
            </li>
            <menu-link-component 
            class="header__item"
            :text="links[1].text"
            :link="links[1].link"
            />
            <menu-link-component 
            class="header__item"
            :text="links[2].text"
            :link="links[2].link"
            />
            <menu-link-component 
            class="header__item"
            :text="links[3].text"
            :link="links[3].link"
            />
        </ul>
    </header>
</template>

<script>
import MenuLinkComponent from './MenuLinkComponent.vue';

export default {
    components: {MenuLinkComponent},
    data() {
        return {
            links: [
                {
                    id: 0,
                    link: '/',
                    icon: 'Logo.svg'
                },
                {
                    id: 1,
                    text: 'Our coffee',
                    link: '/our-coffee',
                },
                {
                    id: 2,
                    text: 'For your pleasure',
                    link: '/goodview',
                },
                {
                    id: 3,
                    text: 'Contact Us',
                    link: '/contacts',
                }
            ]
        }
    }
}
</script>