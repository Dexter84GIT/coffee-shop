<template>
    <div :class="className">
        <img :src="require(`@/assets/img/${image}`)" :alt="image">
        <div class="best__item-title">{{ name }}</div>
        <div class="best__item-price">{{ price }}$</div>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: [String, Number],
            required: false,
            default:  "coffee_goods.jpg"
        },
        name: {
            type: [String, Number],
            required: false,
        },
        price: {
            type: [String, Number],
            required: false,
            default: 0.00
        },
        className: {
            type: [String, Number],
            required: false,
        }
    }
}
</script>