<!-- ============================== Script ============================== -->
<script setup>
const props = defineProps({
    dice: {
        type: Boolean,
        details: 'Roll details for a specific number of dice',
    },
    n: {
        type: Number,
        details: 'quanity of dice to roll',
        default: 0,
    },
});
const quant = props.n > 0 ? `${props.n} DICE`
    : props.dice ? `DICE`
    : 'SOMETHING';
</script>

<!-- ============================== Template ============================== -->
<template>
<router-link to="/rolling">
    <span class="roll">roll {{quant}}</span>
</router-link>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
.roll {
    color: var(--stat-color, #6b6e70);
    font-weight: 700;
}
</style>