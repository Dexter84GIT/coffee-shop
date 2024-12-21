<template>
    <header>
        <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
            
            <menu-link-component
                :link="links.header.link"
                classLink="header__item"
            >
                <img 
                :src="require(`@/assets/logo/${links.header.icon}`)" 
                :alt="links.header.icon"
                />
            </menu-link-component>

            <menu-link-component 
            v-for="link in links.other"
            :key="link.id"
            classLink="header__item" 
            :text="link.text" 
            :link="link.link" 
            />
        </ul>
    </header>
</template>

<script>
import MenuLinkComponent from './MenuLinkComponent.vue';

export default {
    components: { MenuLinkComponent },
    data() {
        return {
            links: {
                header: {
                    id: 0,
                    link: '/',
                    icon: 'Logo.svg'
                },
                other: [
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
}
</script>