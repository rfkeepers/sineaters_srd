<!-- ============================== Script ============================== -->
<script setup>
import Options from "@/components/Options.vue";
import { ref } from 'vue';

const randInt = max => Math.floor(Math.random() * max) + 1;

const dieSetD12 = 'd12';
const dieSetPool = 'pool';
const dieSet = ref(dieSetD12);

// instability
const instability = ref(0);

// banes
const banes = ref(0);

// dice explanation
const rollExplanations = {
    'S': { title: 'Success!', subTitle: 'You do it.', range: { d12: '10+', pool: '10+' } },
    'P': { title: 'Partial Success.', subTitle: 'You do it, but with cost, complication, or problems.', range: { d12: '5 - 9', pool: '7 - 9' } },
    'F': { title: 'Fail.', subTitle: 'You faltered, flinched, or screwed up.', range: { d12: '4-', pool: '6-' } },
};

const modControlled = 'Controlled';
const modDesperation = 'Desperation';
const modNormal = 'Normal';
const mods = {
    [modDesperation]: { text: 'In your moment of desperation you took things too far and caused additional collateral damage or problems.  Ask or tell the GM how.' },
    [modControlled]: { text: 'In your attempt to get things just right, you took valuable extra time or caused half the effect you wanted.  Ask or tell the GM which.' },
};
const modReasons = {
    1: 'rolled a 1.',
    bane: 'rolled equal or lower than your Bane.',
};


// modifier (desperation and controlled) state
const modType = ref(modNormal);
const modDie = ref(0);
const randMod = () => {
    modDie.value = randInt(6);
};

// outcome state
const outcome = ref(null);
const getOutcome = (set, value, mod, mValue) => {
    let rollVal = (mod === modDesperation || mod === modControlled)
        ? value + (mValue || 0)
        : value;
    console.log('rollval', rollVal);
    // handle the roll
    switch (set) {
    case dieSetD12:
        outcome.value = rollVal < 5 ? rollExplanations.F
            : rollVal > 9 ? rollExplanations.S
            : rollExplanations.P;
            break;
    case dieSetPool:
        outcome.value = rollVal < 7 ? rollExplanations.F
            : rollVal > 9 ? rollExplanations.S
            : rollExplanations.P;
            break;
    };
    // handle desperation and outcome
    if ((mod && mod !== modNormal) && ((mValue <= banes.value) || (mValue === 1))) {
        outcome.value.mod = mod === modDesperation ? mods[modDesperation] : mods[modControlled];
        outcome.value.mod.reason = mValue === 1 ? modReasons['1'] : modReasons['bane'];
    } else {
        delete outcome.value.mod;
        delete outcome.value.modReason;
    }
};
const clearOutcome = () => {
    outcome.value = null;
    modType.value = null;
    modType.value = modNormal;
};

const resetDice = () => {
    d12.value = 0;
    pool.value = [];
    poolSum.value = 0;
    modDie.value = 0;
    clearOutcome();
};

// d12
const d12 = ref(0);
const reset12 = () => {
    resetDice();
    dieSet.value = 'd12';
};
const roll12 = () => {
    d12.value = randInt(12);
    randMod();
    getOutcome(dieSet.value, d12.value, modType.value, modDie.value);
};

// d6 pool
const pool = ref([]);
const poolSum = ref(0);
const resetPool = () => {
    resetDice();
    dieSet.value = 'pool';
};
const reRollPool = () => {
    d12.value = 0;
    dieSet.value = 'pool';
    poolSum.value = 0;
    for (let i = 0; i < 5; i++) {
        pool.value[i] = {
            value: randInt(6),
            id: `${i}`,
        };
    }
    instability.value += 1;
    clearOutcome();
};
const rollPool = () => {
    getOutcome(dieSet.value, poolSum.value, modType.value, modDie.value);
};
const toggleSelected = i => {
    const d = pool.value[i];
    if (d.selected) {
        poolSum.value -= d.value;
        d.selected = false;
    } else {
        poolSum.value += d.value;
        d.selected = true;
    }
    pool.value[i] = d;
    rollPool();
};
const consumePool = () => {
    const newPool = [];
    pool.value.forEach(d => {
        if (!d.selected) newPool.push(d);
    });
    pool.value = newPool;
    poolSum.value = 0;
    clearOutcome();
    if (!pool.value.length) reRollPool()
};


const roll = () => {
    switch (dieSet.value) {
    case dieSetD12:
        roll12();
        break;
    case dieSetPool:
        rollPool();
        break;
    }
};

const clearRoll = () => {
    d12.value = 0;
    poolSum.value = 0;
    pool.value.forEach(d => d.selected = false);
    modDie.value = 0;
    clearOutcome();
};

const addMod = mod => {
    modType.value = mod;
    randMod();
    getOutcome(
        dieSet.value,
        dieSet.value === dieSetD12 ? d12.value : poolSum.value,
        modType.value,
        modDie.value);
}

// tags
const tags = ref([]);
const currentTag = ref('');
const addTag = () => {
    const ct = currentTag.value.trim();
    if (!ct) return;
    tags.value.push(ct);
    currentTag.value = '';
};
const removeTag = i => {
    tags.value = tags.value.slice(0, i).concat(tags.value.slice(i+1));
};

// notes
const notes = ref([]);
const currentNote = ref('');
const addNote = () => {
    const cn = currentNote.value.trim();
    if (!cn) return;
    notes.value.push(cn);
    currentNote.value = '';
};
const removeNote = i => {
    notes.value = notes.value.slice(0, i).concat(notes.value.slice(i+1));
};

</script>

<!-- ============================== Template ============================== -->
<template>
<h1 class="title">
    Dice Roller
</h1>

<div class="subHeader">
    <p>ϟ&nbsp;&nbsp;<router-link to="rolling">Dice and Rolling Rules</router-link></p>
</div>
<br>

<div class="frame frame--withButtons">
    <button
        :class="{
            rollBtn: true,
            'rollBtn--selected': dieSet === dieSetD12,
        }"
        @click="reset12"
    >
        D12
    </button>
    <button
        :class="{
            rollBtn: true,
            'rollBtn--selected': dieSet === dieSetPool,
        }"
        @click="resetPool"
    >
        D6 Pool
    </button>
</div>
<br>
<hr v-if="dieSet">

<!-- d12 -->
<div
    v-if="dieSet === dieSetD12"
    class="frame frame--withButtons"
>
    <button
        :class="{
            rollBtn: true,
            'rollBtn--selected': modType === modControlled,
        }"
        @click="modType = modControlled"
    >
        {{ modControlled }}
    </button>
    <button
        :class="{
            rollBtn: true,
            'rollBtn--selected': modType === modNormal,
        }"
        @click="modType = modNormal"
    >
        {{ modNormal }}
    </button>
    <button
        :class="{
            rollBtn: true,
            'rollBtn--selected': modType === modDesperation,
        }"
        @click="modType = modDesperation"
    >
        {{ modDesperation }}
    </button>
</div>
<div v-if="dieSet === dieSetD12">
    <div
        v-if="modType"
        class="frame frame--withButtons"
    >
        <button
            class="rollBtn"
            @click="roll"
        >
            Roll!
        </button>
    </div>
    <div
        v-if="d12 > 0"
        class="frame"
    >
        <div class="rollResult">
            <div class="die">
                {{ d12 }}
            </div>
            <div v-if="modType && modType != modNormal">
                &nbsp;+&nbsp;{{ modDie }}
            </div>
        </div>
        <div
            v-if="outcome"
            class="outcome"
        >
            <div class="outcome__title">
                {{ outcome.title }}
            </div>
            <div class="outcome__subTitle">
                {{ outcome.range[dieSet] }}&nbsp;↝&nbsp;{{ outcome.subTitle }}
            </div>
            <div
                v-if="outcome.mod"
                class="outcome__mod"
            >
                <p class="warnText">
                    {{ modType }}&nbsp;{{ outcome.mod.reason }}
                </p>
                {{ outcome.mod.text }}
            </div>
        </div>
    </div>
</div>

<!-- dice pool -->
<div v-if="dieSet === dieSetPool">

    <div class="frame frame--withButtons">
        <button
            class="rollBtn"
            @click="reRollPool"
        >
            {{ `${pool.length ? 'Re-' : ''}Roll Pool` }}
        </button>
        <button
            v-if="pool.length"
            class="rollBtn"
            :disabled="!poolSum"
            @click="consumePool"
        >
            {{ `${poolSum > 0 ? 'Use Roll' : 'Choose Dice'}` }}
        </button>
    </div>
    <div class="frame">
        <div class="rollResult rollResult--pool">
            <button
                v-for="(d, i) in pool"
                :key="d.id"
                :class="{
                    die: true,
                    'die--clickable': true,
                    'die--selected': d.selected,
                }"
                @click="toggleSelected(i)"
            >
                {{ d.value }}
            </button>
        </div>
    </div>

    <div
        v-if="pool.length"
        class="frame frame--withDice"
    >
        <button
            :class="{
                die: true,
                'die--wide': true,
                'die--selected': modType === modControlled,
            }"
            :disabled="!poolSum"
            @click="addMod(modControlled)"
        >
            {{ modControlled }}
        </button>
        <button
            :class="{
                die: true,
                'die--wide': true,
                'die--selected': modType === modNormal,
            }"
            :disabled="!poolSum"
            @click="addMod(modNormal)"
        >
            {{ modNormal }}
        </button>
        <button
            :class="{
                die: true,
                'die--wide': true,
                'die--selected': modType === modDesperation,
            }"
            :disabled="!poolSum"
            @click="addMod(modDesperation)"
        >
            {{ modDesperation }}
        </button>
    </div>

    <div v-if="poolSum > 0">
        <div class="frame">
            <div class="rollResult">
                {{ poolSum }}
                <div v-if="modType && modType != modNormal">
                    &nbsp;+&nbsp;{{ modDie }}
                </div>
            </div>
            <div
                v-if="outcome"
                class="outcome"
            >
                <div class="outcome__title">
                    {{ outcome.title }}
                </div>
                <div class="outcome__subTitle">
                    {{ outcome.range[dieSet] }}&nbsp;↝&nbsp;{{ outcome.subTitle }}
                </div>
                <div
                    v-if="outcome.mod"
                    class="outcome__mod"
                >
                    <p class="warnText">
                        {{ modType }}&nbsp;{{ outcome.mod.reason }}
                    </p>
                    {{ outcome.mod.text }}
                </div>
            </div>
        </div>
    </div>
</div>
<hr>

<div class="frame">
    <div class="tracker">
        <div>
            BANE:&nbsp;{{ banes }}&nbsp;
        </div>
        <div class="tracker__buttons">
            <button @click="banes++">+</button>
            <button @click="banes--">−</button>
        </div>
    </div>
    <div class="tracker">
        <div>
            INSTABILITY:&nbsp;{{ instability }}
        </div>
        <div class="tracker__buttons">
            <button @click="instability++">+</button>
            <button @click="instability--">−</button>
        </div>
    </div>
</div>
<br>
<hr>

<div class="frame frame--withNotes">
    <h2>Tags</h2>
    <div class="note">
        <Options bullet="ϟ" :options="tags" />
        <div class="note__add">
            <input
                v-model="currentTag"
                type="text"
                class="note__add__input"
                @keypress.enter="addTag"
            />
            <button
                class="note__add__button"
                @click="addTag"
            >
                ＋
            </button>
        </div>
    </div>
</div>

<div class="frame frame--withNotes">
    <h2>Notes</h2>
    <div class="note">
        <Options bullet="⌭" :options="notes" />
        <div class="note__add">
            <input
                v-model="currentNote"
                type="text"
                class="note__add__input"
                @keypress.enter="addNote"
            />
            <button
                class="note__add__button"
                @click="addNote"
            >
                ＋
            </button>
        </div>
    </div>
</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
.frame {
    padding: 16px;
    margin: 16px 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }

    &--withButtons {
        padding: 0;

        @media screen and (max-width: 900px) {
            flex-direction: row;
        }
    }

    &--withDice {
        flex-direction: row;
        justify-content: center;
        gap: 16px 16px;
    }

    &--withNotes {
        flex-direction: column;
    }
}

.subHeader {
    text-align: center;
}

.rollBtn {
    color: var(--tracker-color-button-text, white);
    background-color: transparent;
    flex-grow: 1;
    padding: 32px 8px;
    font-size: 1.25em;
    border: 1px solid var(--tracker-color-button-border, teal);

    &--selected {
        border: 1px solid var(--tracker-color-button-border-selected, orange);
    }

    &--wide {
        width: 100%;
    }

    &:hover {
        background-color: var(--tracker-color-button-hover, purple);
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.3;
    }
}

.rollResult {
    font-size: 3em;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10%;

    @media screen and (max-width: 900px) {
        width: 100%;
        justify-content: center;
        padding-right: 0;
    }

    &--pool {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 16px 16px;
        padding-right: 0;
    }
}

.outcome {
    width: 50%;

    @media screen and (max-width: 900px) {
        width: 100%;
        margin-top: 32px;
        text-align: center;
    }

    &__title {
        color: var(--tracker-color-outcome-title, blue);
        font-size: 2em;
        line-height: 1em;

        @media screen and (min-width: 900px) {
            width: max-content;
        }
    }

    &__mod {
        margin-top: 8px;
    }
}

.die {
    border: 1px solid var(--tracker-color-die-border, pink);
    border-radius: 4px;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    &--clickable {
        cursor: pointer;
    }

    &--selected {
        background-color: var(--tracker-color-die-selected, teal);
    }

    &--wide {
        width: 100px;
    }

    &:focus {
        border-color: var(--tracker-color-die-focus, green);
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.3;
    }
}

.warnText {
    color: var(--tracker-color-text-warn, yellow);
}

.tracker {
    font-size: 2em;
    margin-top: 24px;
    display: flex;
    align-items: center;

    &__buttons {
        color: var(--tracker-color-die-focus, blue)
    }
}

.note {
    text-align: left;
    width: 100%;

    &__add {
        display: flex;
        margin-top: 16px;

        &__button {
            min-width: 13%;
            margin-left: 2%;
            border: 1px solid var(--tracker-color-button-border, magenta);
        }

        &__input {
            height: 55px;
            min-width: 85%;

            border-bottom-style: solid;
            border-left-style: solid;
            border-right-style: solid;
            border-top-style: solid;
            border-color: var(--tracker-color-button-border, magenta);

            &:focus {
                border: 1px solid var(--tracker-color-die-focus, red);
            }
        }
    }
}

</style>