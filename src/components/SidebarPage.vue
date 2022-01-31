<!-- ============================== Script ============================== -->
<script setup>
import * as evt from '@/utils/event';
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const props = defineProps({
    initHidden: {
        type: Function,
        description: 'A function that returns a boolean.  When it returns true, the sidebar will immediately hide.',
    },
});

// ---------- swipe (touch event) handling
let touchX = 0;
let touchY = 0;
let touchT = 0;
const handleTouchStart = (ev) => {
    if (!matchMedia("screen and (max-width: 900px)").matches) return;
    touchX = ev.targetTouches[0].screenX;
    touchY = ev.targetTouches[0].screenY;
    touchT = ev.timeStamp;
};
const handleTouchEnd = (ev) => {
    if (!matchMedia("screen and (max-width: 900px)").matches) return;
    const diffX = ev.changedTouches[0].screenX - touchX;
    const diffY = ev.changedTouches[0].screenY - touchY;
    const diffT = ev.timeStamp - touchT;
    touchX = 0;
    touchY = 0;
    touchT = 0;
    if (diffX < -100 && -50 < diffY && diffY < 50 && diffT < 1000) hide();
    if (diffX > 100 && -50 < diffY && diffY < 50 && diffT < 1000) show();
};

// ---------- sidebar visibility control
const page = ref(null);
const sidebar = ref(null);
let isVisible = ref(true);
const show = () => {
    const wasClosed = !isVisible.value;
    isVisible.value = true;
    if (wasClosed && isVisible.value) evt.emit('sidebarOpen');
};
const hide = () => {
    const wasOpen = !!isVisible.value;
    isVisible.value = matchMedia("screen and (min-width: 900px)").matches;
    if (wasOpen && !isVisible.value) evt.emit('sidebarClose');
};
const toggle = () => {
    const tog = isVisible.value ? hide : show;
    tog();
};
const hideIfShown = () => {
    if (!isVisible.value) return;
    hide();
};

// ---------- lifecycle and navigation hooks
onMounted(() => {
    // establish touch listeners
    page.value.addEventListener('touchstart', handleTouchStart, false);
    page.value.addEventListener('touchend', handleTouchEnd, false);
    sidebar.value.addEventListener('touchstart', handleTouchStart, false);
    sidebar.value.addEventListener('touchend', handleTouchEnd, false);
    // close the sidebar when the app menu gets opened (should only happen on mobile)
    evt.listen('navOpen', hideIfShown);
    // callers may force the sidebar open and closed
    evt.listen('toggleSidebar', toggle);
    evt.listen('closeSidebar', hide);
    evt.listen('openSidebar', show);

    isVisible.value = !props.initHidden?.();

    if (route.hash) {
        scrollTo(route.hash.substring(1), 'auto');
    }
});
onUnmounted(() => {
    document.removeEventListener('click', hideIfShown);
    evt.remove('navOpen', hideIfShown);
    evt.remove('toggleSidebar', toggle);
    evt.remove('closeSidebar', hide);
    evt.remove('openSidebar', show);
});
</script>

<!-- ============================== Template ============================== -->
<template>
<div
    :class="{
        'sidebar': true,
        'sidebar--visible': isVisible,
    }"
    @keyup.esc="hide"
    ref="sidebar"
    tabglossary="-1"
>
    <slot name="sidebar" />
</div>
<div
    class="page"
    ref="page"
>
    <div
        class="menu"
        @click="show"
    >
        ⭄ Menu
    </div>
    <slot name="page" />
</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
.page {
    height: calc(100% - 1em);
    width: calc(100% - 360px);
    padding: 0 32px;
    margin-left: 360px;

    @media screen and (max-width: 900px) {
        width: 100%;
        left: 0;
        padding: 0;
        margin-left: 0;
        position: inherit;
    }

    @media screen and (min-width: 1280px) {
        padding: 0 10%;
    }
}

.sidebar {
    z-index: 900;
    position: fixed;
    transition: left 0.25s ease-out;
    height: 100%;
    width: 360px;
    top: 50px;

    background-color: var(--glossary-color-list-background, black);
    border-right: 1px solid var(--glossary-color-list-border, white);

    display: flex;
    flex-direction: column;

    &:focus{
        outline: none;
    }

    @media screen and (min-width: 900px) {
        left: 0;
    }

    @media screen and (max-width: 900px) {
        width: calc(100vw + 1px);
        left: calc(-100vw - 1px);

        &--visible {
            left: 1px;
        }
    }
}

.menu {
    &:hover {
        text-decoration: underline;
    }

    &::first-letter {
        font-size: 1.25em;
    }

    @media screen and (min-width: 900px) {
        display: none;
    }
}
</style>