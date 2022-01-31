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
    class="menu"
>
    <div
        class="entry"
        @click="setHash(link.hash)"
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
    padding-left: 20px;
    font-size: 1.35em;
    color: var(--sidebarMenu-color-text, white);

    @media screen and (max-width: 900px) {
        font-size: 1.5em;
    }
}

.entry {
    padding-top: 8px;

    &__label:hover {
        cursor: pointer;
        text-decoration: underline;
    }

    @media screen and (max-width: 900px) {
        padding-top: 16px;
    }
}

.submenu {
    font-size: 0.625em;
}

.close {
    position: absolute;
    right: 31px;
    font-size: 1.2em;
    color: var(--sidebarMenu-color-icon, white);
    transform: scaleX(1.5);

    @media screen and (min-width: 900px) {
        display: none;
    }
}
</style>