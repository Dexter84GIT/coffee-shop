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
    computed: {
        links() {
            return this.$store.getters['getHeaderLinks'];
        }
    }
}
</script>