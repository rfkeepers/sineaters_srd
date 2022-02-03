<!-- ============================== Script ============================== -->
<script setup>
import Options from '@/components/Options.vue';
</script>

<!-- ============================== Template ============================== -->
<template>
<div>
<h1 class="title">
    Journey In The Mind
</h1>

<blockquote>
    She had locked something away, something deep inside.  A truth that she had once known, but chose to forget.  And she couldn't break free.  So I decided to search for it.  I went deep into the recess of her mind and found that secret place.  And I broke in...
    <figcaption>Cobb</figcaption>
</blockquote>

<p>
    Sin Eaters is a role playing game about people who delve into the boundless figments and hauntings of the mind.  The theme is inspired by works like <i>Psychonauts</i>, <i>The Cell (2002)</i>, <i>To The Moon</i>, and <i>Inception</i>.  Within, we follow a crew of characters risking personal sacrifice to journey into the mental universe of the traumatized and the dying, to save them from themselves.
</p>

<h2>
    What is a Sin Eater?
</h2>

<blockquote>
    I give easement and rest now to thee. Come not down the lanes or in our meadows. And for thy peace, I pawn my own soul. Amen.
    <figcaption>Historical Sin Eater Prayer</figcaption>
</blockquote>

<p>
    At the edges of their life the dying are consumed by their sins.  Death will damn their soul to the earth, to plague the living as wraiths and ghosts forever more.  Penance cannot help them.  Their body is quickly failing, they can no longer perform the rites.  The family and friends close by must make a choice: let them die an unclean, damned death; or call out for you, a sin eater.
</p>

<p>
    Sin eating was a real practice in the UK and other parts of the world throughout the 1600s to the 1900s.  Sin eaters were called to help those on the verge of death, their job to undertake a ritual meal where the sins of the dying were passed onto the food, and then into the eater.
</p>

<p>
    And what did they get for their service?  A little money along with enormous shame.  You see, a sin eater bore all the sins of those whom they've served.  They were living anathema, walking hell.  The person who carries such tarnish has no good place in society.
</p>

<p>
    This game is not historically accurate.  Far from it.  We're here to magify the transaction of the sin eaters in fantasy and imagination.  What if, to those people, the ritual were more than a meal?  What if it were a transcendant and harrowing adventure.  A gamble of their own humanity against the sin they consumed, an effort to internalize the abysses of another person's life?  Where would this event take them?
</p>

<h2>
    In this game, you will...
</h2>
<br>
<Options bullet="ϟ" asHtml :options="[
    'Navigate <strong>psychic landscapes</strong>',
    'Help others through <strong>their past suffering</strong> at the cost of your own well-being',
    'Explore <strong>awareness</strong> of personal faults & issues',
    'Work past <strong>your own demons</strong> with time, care, and help',
]" />

<blockquote>
    Everybody has a secret world inside of them. I mean everybody. All of the people in the whole world, I mean everybody — no matter how dull and boring they are on the outside. Inside them they’ve all got unimaginable, magnificent, wonderful, stupid, amazing worlds…
    <figcaption>Niel Gaiman</figcaption>
</blockquote>
<br>
<div class="alert">
    <p>
        Here for a playtest?  Check out the <router-link to="playtesting">playtesting page</router-link> for a guide.
    </p>
</div>
</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>
