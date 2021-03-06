<!-- ============================== Script ============================== -->
<script setup>
import SidebarMenu from '@/components/SidebarMenu.vue';

import * as evt from '@/utils/event';
import { scrollTo } from '@/utils/tools.js';
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps({
    links: {
        type: Object,
        description: 'A list of links to be displayed as a menu.  Each is an object structured as { label, hash, links }, where links can continue recursively.',
    },
    depth: {
        type: Number,
        default: 0,
    }
});

const closeSidebar = () => {
    evt.emit('closeSidebar');
};

const setHash = hash => {
    console.log('setting hash', hash);
    closeSidebar();
    router.replace({ hash: `#${hash}` });
    scrollTo(hash);
};
</script>

<!-- ============================== Template ============================== -->
<template>
<div
    v-if="depth === 0"
    class="close clickable"
    @click.stop="closeSidebar"
>╳</div>
<div
    v-for="link in links"
    :key="link.hash"
    :class="{
        menu: true,
        menu__outer: depth === 0,
    }"
>
    <div
        class="entry"
        @click.stop="setHash(link.hash)"
    >
        <div class="entry__label">
            {{link.label}}
        </div>
        <div
            v-if="link.links"
            class="submenu"
        >
            <SidebarMenu :links="link.links" :depth="depth+1" />
        </div>
    </div>
</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
.menu {
    display: flex;
    padding-left: 36px;
    font-size: 1.65em;
    color: var(--sidebarMenu-color-text, white);

    @media screen and (max-width: 900px) {
        font-size: 1.75em;
    }

    &__outer {
        padding-left: 44px;
        padding-top: 12px;

        @media screen and (max-width: 900px) {
            padding-top: 8px;
        }
    }
}

.entry {
    padding-top: 12px;

    &__label:hover {
        cursor: pointer;
        text-decoration: underline;
    }

    @media screen and (max-width: 900px) {
        padding-top: 20px;
    }
}

.submenu {
    font-size: 0.5em;

    @media screen and (max-width: 900px) {
        font-size: 0.5em;
    }
}

.close {
    position: absolute;
    right: 31px;
    top: 24px;
    font-size: 1.2em;
    color: var(--sidebarMenu-color-icon, white);
    transform: scaleX(1.5);

    @media screen and (min-width: 900px) {
        display: none;
    }
}
</style>