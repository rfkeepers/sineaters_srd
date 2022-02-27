<!-- ============================== Script ============================== -->
<script setup>
import Options from '@/components/Options.vue';
</script>

<!-- ============================== Template ============================== -->
<template>
<div>
<h1 class="title">
    Playtesting Guide
</h1>
<blockquote>
    Everybody has a secret world inside of them. I mean everybody. All of the people in the whole world, I mean everybody — no matter how dull and boring they are on the outside. Inside them they've all got unimaginable, magnificent, wonderful, stupid, amazing worlds…
    <figcaption>Niel Gaiman</figcaption>
</blockquote>
<p>
    Hello, and thanks for joining a playtest.  We're just starting on this adventure, figuring out everything from the ground up, and are so glad you're taking part in it.
</p>
<p>
    This page is a reference sheet, to help guide you through what you need to know about playing the game.
</p>

<h2>
    How To Play
</h2>
<div class="blurb guideLinks">
    <br>
    ϟ&nbsp;&nbsp;<router-link to="rolling">Dice and Rolling Rules</router-link>
    <br><br>
    ϟ&nbsp;&nbsp;<router-link to="harm">Harm</router-link>
    <br><br>
    ϟ&nbsp;&nbsp;<router-link to="banes">Bane, Instability, and Malefaction</router-link>
    <br><br>
    ϟ&nbsp;&nbsp;<router-link to="chargen">Character Creation</router-link>
</div>

<h2>
    About The Setting
</h2>
<div class="blurb guideLinks">
    <br>
    ϟ&nbsp;&nbsp;<router-link to="setting">The Setting</router-link>
    <br><br>
    ϟ&nbsp;&nbsp;<router-link to="pockets">Pocket Reality and Ritual</router-link>
    <br>
</div>

<h2>
    Play Tools
</h2>
<div class="blurb guideLinks">
    <br>
    ϟ&nbsp;&nbsp;<router-link to="diceroller">Dice Roller</router-link>
</div>
</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
.guideLinks {
    font-size: 1.2em;
}
</style>
