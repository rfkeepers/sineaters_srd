<!-- ============================== Script ============================== -->
<script setup>
import SidebarPage from '@/components/SidebarPage.vue';

import * as evt from '@/utils/event';
import { glossary } from '@/glossary/glossary.js';
import { ref, onMounted, onUnmounted } from 'vue';

import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

// ---------- input control
const searchInput = ref(null);
const onSidebarOpen = () => {
    searchInput.value.focus();
};
const onSidebarClose = () => {
    searchInput.value?.blur();
};

// ---------- glossary entries
const searchTerm = ref('');
const formattedGlossary = [];
glossary.forEach(ge => {
    const fe = Object.assign({}, ge);
    fe.searchable = [fe.name, fe.type, ...fe.tags].map(s => s.toLowerCase());
    formattedGlossary.push(fe);
});
formattedGlossary.sort((a, b) => a.name.localeCompare(b.name));
const filteredGlossary = ref(Object.assign({}, formattedGlossary));
const searchGlossary = (ev) => {
    let term = ev.target.value ? ev.target.value.toLowerCase().trim() : '';
    if (!term) {
        filteredGlossary.value = Object.assign({}, formattedGlossary);
        return;
    }
    filteredGlossary.value = formattedGlossary.filter(
        fe => fe.searchable.some(
            s => s.includes(term)
        )
    );
};
const selectEntry = (ent) => {
    router.push({ path: `/glossary${ent.path}` });
    searchInput.value?.blur();
    evt.emit('toggleSidebar');
};

// ---------- lifecycle and navigation hooks
onMounted(() => {
    evt.listen('sidebarOpen', onSidebarOpen);
    evt.listen('sidebarClose', onSidebarClose);
});
onUnmounted(() => {
    evt.remove('sidebarOpen', onSidebarOpen);
    evt.remove('sidebarClose', onSidebarClose);
});
const initSidebarHidden = () => {
    if (matchMedia("screen and (max-width: 900px)").matches)
        return true;
    else if (route.path.includes('landing'))
        searchInput.value.focus();
};
</script>

<!-- ============================== Template ============================== -->
<template>
<SidebarPage :initHidden="initSidebarHidden">
<template v-slot:sidebar>
    <div class="search">
        <input
            type="text"
            ref="searchInput"
            class="search__input"
            placeholder="search for moves/playbooks/etc"
            @input="searchGlossary"
        />
    </div>
    <div class="entries">
        <ul>
            <li
                v-for="fg in filteredGlossary"
                :key="fg"
                :class="{
                    entry: true,
                    'entry--selected': $route.path.includes(fg.path),
                }"
                @click.stop="selectEntry(fg)"
            >
                <div>{{fg.name}}</div>
                <div class="entry__type">{{fg.type}}</div>
            </li>
        </ul>
    </div>
</template>
<template v-slot:page>
    <router-view></router-view>
</template>
</SidebarPage>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
.search {
    padding: 0 16px;
    width: 100%;
    background-color: var(--glossary-color-search-background, black);
    border-bottom: 2px solid var(--glossary-color-search-border, white);

    &__input {
        width: 100%;
    }
}

.entries {
    height: 100%;
    overflow-y: auto;

    .entry {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 24px;
        min-height: 40px;
        cursor: pointer;

        &:last-child {
            margin-bottom: 6em;
        }

        &:hover {
            background: var(--glossary-color-entry-highlight, rgba(56, 48, 109, 0.596));
        }

        &--selected {
            background: var(--glossary-color-entry-highlight, rgba(56, 48, 109, 0.596));
        }

        &__type {
            font-size: 0.8em;
            padding: 2px 8px;
            border-radius: 3px;
            background: var(--glossary-color-entry-type, darkslategray);
        }
    }
}
</style>