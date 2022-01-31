<!-- ============================== Script ============================== -->
<script setup>
</script>

<!-- ============================== Template ============================== -->
<template>
<div class="glossaryHome">
    Welcome to the glossary.  Here you can search quick references to any move, background, persona, or other thingy in the game!
    <div class="glossaryHome__controls">
        <br><br>
        <b>Swipe right</b> to open the menu.
        <br><br>
        <b>Swipe Left</b> or select an entry to close it again.
    </div>
</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
.glossaryHome {
    width: 100%;
    height: 100%;

    .glossaryHome__controls {
        display: none;
        @media screen and (max-width: 900px) {
            display: block;
        }
    }
}
</style>