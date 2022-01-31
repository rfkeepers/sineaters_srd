<!-- ============================== Script ============================== -->
<script setup>
import * as evt from '@/utils/event.js';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

defineEmits(['routed']);
defineProps({
    name: {
        type: String,
        description: "The text of the dropdown display.",
    },
    links: {
        type: Array,
        description: "Array of objects containing 'to', 'text', and 'external', each will create a router-link.",
    },
});

// ------ dropdown controls
const showDropdown = ref(false);

const toggleDropdown = e => {
    const offclick = e2 => {
        if (e !== e2) {
            showDropdown.value = !showDropdown.value;
            document.removeEventListener('click', offclick);
        }
    }
    if (!showDropdown.value) {
        showDropdown.value = !showDropdown.value;
        document.addEventListener('click', offclick);
    }
};

const emitRouted = () => {
    evt.emit('routed');
};

const routeTo = link => {
    if (link.external) window.location.href = link.to;
    emitRouted();
    router.push(link.to);
};

</script>

<!-- ============================== Template ============================== -->
<template>
<nav>
    <div
        class="navDropdown"
        @click="toggleDropdown"
    >
        {{ name }}
    </div>
    <div
        v-if="showDropdown"
        class="navPopover"
    >
        <menu class="navPopover__list">
            <li
                v-for="l in links"
                :key="l.to"
                @click="routeTo(l)"
                class="navPopover__list__line"
            >
                <a
                    v-if="l.external"
                    :href="l.to"
                >
                    {{ l.text }}
                </a>
                <router-link
                    v-else
                    :to="l.to"
                    @click="emitRouted"
                >
                    {{ l.text }}
                </router-link>
            </li>
        </menu>
    </div>
</nav>
</template>

<!-- ============================== Style ============================== -->
<style scoped lang="scss">

.navDropdown {
    cursor: pointer;
    text-indent: 1em;
    color: var(--nav-color-text, white);

    @media screen and (max-width: 900px) {
        margin-top: 8px;

        &:first-child {
            margin-top: 16px;
        }
    }
}

.navPopover {
    @media screen and (min-width: 900px) {
        position: relative;
    }

    &__list {
        z-index: 1100;

        @media screen and (min-width: 900px) {
            position: absolute;
            width: max-content;
            right: 0.35em;
            top: 0.35em;
            background: var(--nav-color-background, black);
            border: 2px solid var(--nav-color-border, magenta);
            border-radius: 0.5em;
            padding: 0;

            &:after {
                content: "";
                position: absolute;
                top: -0.4em;
                right: 5px;
                border-style: solid;
                border-width: 0 6px 6px;
                border-color:  var(--nav-color-flag, magenta) transparent;
                display: block;
                width: 0;
                z-index: 1;
            }
        }

        &__line {
            cursor: pointer;
            padding: 4px 1.25em 4px 1em;
            z-index: 1;

            &:hover {
                background: var(--nav-color-background-hover, green);
            }

            @media screen and (max-width: 900px) {
                padding: 8px;
                padding-left: 16px;
                margin-left: 20px;
                border-left: 1px solid var(--nav-color-background-hover, white);
            }

            @media screen and (min-width: 900px) {

                &:first-child {
                    padding-top: 6px;
                    border-top-left-radius: 0.5em;
                    border-top-right-radius: 0.5em;
                }

                &:last-child {
                    padding-bottom: 6px;
                    border-bottom-left-radius: 0.5em;
                    border-bottom-right-radius: 0.5em;
                }
            }
        }
    }
}
</style>