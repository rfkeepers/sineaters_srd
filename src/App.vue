<!-- ============================== Script ============================== -->
<script setup>
import NavDropdown from '@/components/NavDropdown.vue';

import * as evt from '@/utils/event.js';
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

defineEmits(['routed']);

// ---------- nav display controls
const showNavDropdown = ref(matchMedia("screen and (min-width: 900px)").matches);
const hideNavs = () => {
  showNavDropdown.value = !matchMedia("screen and (max-width: 900px)").matches;
};
const showNavs = () => {
  showNavDropdown.value = !showNavDropdown.value;
  if (showNavDropdown) {
    evt.emit('navOpen');
  }
};

// ---------- nav display options
const aboutLinks = [
  {to: "/feedback", text: "Feedback"},
  {to: "https://www.innumerable-engines.net", external: true, text: "Innumerable Engines"},
];
const contentLinks = [
  {to: "/", text: "Home"},
  {to: "/playtesting", text: "Playtesting"},
  {to: "/rolling", text: "Rolling"},
  {to: "/harm", text: "Harm"},
  {to: "/banes", text: "Banes"},
  {to: "/chargen", text: "Character Creation"},
  {to: "/setting", text: "The Setting"},
  {to: "/pockets", text: "Pocket Reality"},
];
const glossaryLinks = [
  {to: "/glossary/landing", text: "Glossary"},
];

// ---------- routing configurations
// const isSidebarPage = ref(false);
const routeHome = () => {
  evt.emit('routed');
  router.push('/');
};

// configure the header and other per-route properties
router.beforeEach(to => {
  document.title = to.meta.title;
  Array.from(document.querySelectorAll('[data-vue-app-controlled]'))
    .map(el => el.parentNode.removeChild(el));

  if(!to.meta.tags) { return; }

  to.meta.tags.map(tag => {
    const el = document.createElement('meta');
    Object.keys(tag).forEach(key => el.setAttribute(key, tag[key]));
    el.setAttribute('data-vue-app-controlled', true);
    return el;
  })
  .forEach(tag => document.head.appendChild(tag));
});

// ---------- display configurations
const onResize = () => {
  showNavDropdown.value = matchMedia("screen and (min-width: 900px)").matches;
}

// ---------- lifecycle and navigation hooks
onMounted(() => {
  window.addEventListener('resize', onResize);
  evt.listen('routed', hideNavs);
});
onUnmounted(() => {
  console.log('before unmounted');
  window.removeEventListener('resize', onResize);
  evt.remove('routed', hideNavs);
})
</script>

<!-- ============================== Template ============================== -->
<template>
<div class="overlord">

  <!-- Header -->
  <div
    id="sineaters"
    class="headerBar"
  >

    <!-- Title -->
    <div
      class="headerBar__title"
      @click="routeHome"
    >
      Sin Eaters
    </div>

    <!-- Navigation -->
    <div
      class="headerBar__nav-button"
      @click="showNavs"
    >
      &#9776;
    </div>

    <!-- Nav Dropdown -->
    <div class="headerBar__links" v-if="showNavDropdown">
      <NavDropdown
        name="Content"
        :links="contentLinks"
      />
      <div class="headerBar__links__spacer">|</div>
      <NavDropdown
        v-if="false"
        name="Support"
        :links="glossaryLinks"
      />
      <!-- <NavLink>Glossary</NavLink> -->
      <div class="headerBar__links__spacer">|</div>
      <NavDropdown
        name="About"
        :links="aboutLinks"
      />
    </div>
  </div>

  <!-- Body -->
  <div :class="{
    'pageBody': true,
    'pageBody--sidebar': $route.meta.sidebar,
  }">
    <router-view></router-view>
  </div>

</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss">
.headerBar {
  font-family: Verdana, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.pageBody {
  font-family: Verdana, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-y: auto;
}
</style>

<style lang="scss" scoped>
.headerBar {
  background: var(--header-color-background, white);
  padding: 1em 1.5em 0.67em 1.5em;
  border-bottom: 2px solid var(--header-color-border, white);
  display: grid;

  @media screen and (max-width: 900px) {
    grid-template-columns: max-content auto max-content;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "title . navBtn"
      "subtitle . ."
      "nav nav nav";
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: max-content max-content auto max-content;
    grid-template-rows: auto;
    grid-template-areas:
      "title subtitle . nav";
    padding-left: 15%;
    padding-right: 15%;
  }

  &__links {
    grid-area: nav;
    display: flex;

    @media screen and (max-width: 900px) {
      flex-direction: column;
      width: 100%;
    }

    @media screen and (min-width: 900px) {
      text-indent: 0.5em;
      align-self: end;
    }

    &__spacer {
      text-indent: 16px;

      @media screen and (max-width: 900px) {
        display: none;
      }
    }
  }

  &__nav-button {
    grid-area: navBtn;
    align-self: end;
    font-size: 20pt;

    @media screen and (min-width: 900px) {
      display: none;
    }

    @media screen and (max-width: 900px) {
      display: visible;
    }
  }

  &__title {
    color: var(--header-color-title-1);
    grid-area: title;
    font-size: 2em;
    cursor: pointer;

    @media screen and (min-width: 900px) {
      align-self: end;
    }

    &--2 {
      color: var(--header-color-title-2);
    }
  }
}
</style>
