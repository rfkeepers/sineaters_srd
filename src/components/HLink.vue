<!-- ============================== Script ============================== -->
<script setup>
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

const props = defineProps({
    id: {
        type: String,
        description: 'ID of the title reference, to be appended to the url',
    },
    h: {
        type: Number,
        description: '1-6, representing h1-h6',
        default: 1,
    },
    title: {
        type: Boolean,
        description: 'flags the title display styling',
    },
});

const linkIt = () => {
    router.replace({ hash: `#${props.id}` });
};
</script>
<!-- ============================== Template ============================== -->
<template>
<h1
    v-if="h === 1"
    :id="id"
    :class="{ linkable: true, title }"
    @click="linkIt"
>
    <slot />
</h1>
<h2
    v-if="h === 2"
    :id="id"
    :class="{ linkable: true, title }"
    @click="linkIt"
>
    <slot />
</h2>
<h3
    v-if="h === 3"
    :id="id"
    :class="{ linkable: true, title }"
    @click="linkIt"
>
    <slot />
</h3>
<h4
    v-if="h === 4"
    :id="id"
    :class="{ linkable: true, title }"
    @click="linkIt"
>
    <slot />
</h4>
<h5
    v-if="h === 5"
    :id="id"
    :class="{ linkable: true, title }"
    @click="linkIt"
>
    <slot />
</h5>
<h6
    v-if="h === 6"
    :id="id"
    :class="{ linkable: true, title }"
    @click="linkIt"
>
    <slot />
</h6>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
.linkable:hover {

    &::before {
        content: "↸";
        font-size: 30px;
        color: var(--color-headers, green);
        display: block;
        position: relative;
        font-weight: 100;
        left: -36px;
        width: 0;
        max-width: 0;
        height: 0;
        max-height: 0;

        @media screen and (max-width: 900px) {
            content: "";
        }
    }
}
</style>