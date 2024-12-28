<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <ul class="footer d-flex flex-wrap">
                        <menu-link-component :link="links.main.link" classLink="footer__item">
                            <img :src="require(`@/assets/logo/${links.main.icon}`)" :alt="links.main.icon" />
                        </menu-link-component>

                        <menu-link-component v-for="link of links.other" :key="link.id" classLink="footer__item"
                            :text="link.text" :link="link.link" />
                    </ul>
                </div>
            </div>
            <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
        </div>
    </footer>
</template>

<script>
import MenuLinkComponent from './MenuLinkComponent.vue';

export default {
    components: { MenuLinkComponent },
    computed: {
        links() {
            return this.$store.getters['getFooterLinks'];
        }
    }
}
</script>