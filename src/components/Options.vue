<!-- ============================== Script ============================== -->
<script setup>
const props = defineProps({
    options: {
        type: Array,
        description: "Array of string options values.",
    },
    asHtml: {
        type: Boolean,
        description: "Treat the options values as HTML instead of plain text.",
    },
    bullet: {
        type: String,
        description: "Custom bullet character prepended to all options.",
    },
    bulletSize: {
        type: String,
        description: "Font size of the custom bullet.",
        default: "1em",
    },
    bulletWidth: {
        type: String,
        description: "Width of the bullet spacing, for alignment of text.",
    },
    noIndent: {
        type: Boolean,
        description: "Prevents indenting the options by an additional margin.",
    },
    numbered: {
        type: Boolean,
        description: "Prefixes the options with increasing numbers (ex: 1. 2. ... N.).",
    },
    prefixes: {
        type: Array,
        description: "Array of string prefixes for option values.",
    },
    selectable: {
        type: Boolean,
        description: "Renders a checkbox for each option, instead of a dot.",
    },
    use: {
        type: String,
        description: 'A hack to prevent a million warnings in the glossary from SHPM passing use as a non-prop attribute to this component.',
    },
});

const prefixed = props.prefixes && props.prefixes.length > 0;
const standard = !props.bullet && !prefixed && !props.selectable && !props.numbered;

const customStyle = {
    'font-size': props.bulletSize,
    'width': props.bulletWidth,
};
</script>

<!-- ============================== Template ============================== -->
<template>
<ul
    v-for="(opt, idx) in options"
    :key="opt"
    :class="{
        'options': true,
        'options--noIndent': noIndent,
    }"
>
    <li class="options__item">
        <span v-if="bullet" class="options__item__custom" :style="customStyle">{{bullet}}</span>
        <span v-if="numbered" class="options__item__numbered" :style="customStyle">{{idx+1}}.&nbsp;</span>
        <span v-if="prefixed" class="options__item__prefix" :style="customStyle">{{prefixes[idx]}}</span>
        <span v-if="selectable" class="options__item__selectable" :style="customStyle">▢</span>
        <span v-if="standard" class="options__item__standard" :style="customStyle">●</span>
        <div class="options__item__text">
            <span v-if="asHtml" v-html="opt"></span>
            <span v-else>{{opt}}</span>
            <slot :name="`subslot-${idx}`" />
        </div>
    </li>
</ul>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
$stdWidth: 32px;
$smlWidth: 28px;

.options {
    margin-top: 8px;
    margin-bottom: 4px;
    margin-left: 2%;

    @media screen and (max-width: 900px) {
        margin-left: 8px;
    }

    &--noIndent {
        margin-left: 0;
    }

    &__item {
        display: flex;

        &__standard {
            font-size: 1.25em;
            padding-right: 8px;
            min-width: $stdWidth;

            @media screen and (max-width: 900px) {
                min-width: $smlWidth;
            }
        }

        &__selectable {
            font-size: 1.75em;
            padding-right: 8px;
            min-width: $stdWidth;

            @media screen and (max-width: 900px) {
                min-width: $smlWidth;
            }
        }

        &__custom {
            padding-right: 8px;
            min-width: $stdWidth;

            @media screen and (max-width: 900px) {
                min-width: $smlWidth;
            }
        }

        &__prefix {
            padding-right: 8px;
            min-width: $stdWidth;

            @media screen and (max-width: 900px) {
                min-width: $smlWidth;
            }
        }

        &__text {
            // included in case the caller wants to deep change the text styling for reasons like alignment.
        }
    }
}
</style>