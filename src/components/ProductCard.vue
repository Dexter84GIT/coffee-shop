<template>
    <div :class="className" @click="onEmmit(card.id)">
        <img :src="require(`@/assets/img/${card.image}`)" :alt="card.image">
        <div class="best__item-title">{{ card.name }}</div>
        <div class="best__item-price">{{ card.price | addCurrency }}</div>
    </div>
</template>

<script>
export default {
    props: {
        className: {
            type: [String, Number],
            required: false,
        },
        card: {
            type: Object,
            required: true,
        }
    },
    methods: {
        onEmmit(id) {
            this.$emit('onNavigate', id);
        }
    }
}
</script>
