<!-- ============================== Script ============================== -->
<script setup>
import Options from '@/components/Options.vue';
</script>

<!-- ============================== Template ============================== -->
<template>
<div>
<h1 class="title">
    Harm
</h1>
<blockquote>
    If you drink much from a bottle marked 'poison' it is certain to disagree with you sooner or later.
    <figcaption>Alice</figcaption>
</blockquote>
<p>
    Most of the game takes place in the figments of dying and injured minds.  Within that space everything is simulacra.  A projection of reality. This including the characters themeselves.  They aren't in a real body, they're in a representation of one.
</p>
<p>
    This fundamentally changes what it means for the characters to risk life and limb.  Health and hurt, the biology and physics of the human tissue, no matter what happens to the character inside a pocket those things don't carry back into the real world.  As a result, when handling harm, it would be disingenous of the game to track those effects.
</p>
<p>
    Instead, harm is how we deal with a character's reaction to an experience that shakes them.  It focuses on how the character reponds to the event, more than the event itself.  Many ordeals can shake a person: pain, danger, powerlessness, and so on.  In the game, all these potential causes funnel down to three frames: Identity, Comprehension, and Horror.
</p>

<h2>
    Identity Harm
</h2>
<p>
    People suffer identity harm when their perception or understanding of themselves, or the people or things around them, gets called into question.
</p>

<h2>
    Comprehension Harm
</h2>
<p>
    People suffer comprehension harm when they experience the inexplicable, the eldritch, or something which breaks from fundamental understanding.
</p>

<h2>
    Horror Harm
</h2>
<p>
    People suffer horror harm when they endure a traumatic, disturbing, or frightening ordeal.
</p>

<h3>
    When Harmed
</h3>
<p>
    The person who was harmed must choose one of the following outcomes:
</p>

<p>
    NPCs...
</p>
<Options bullet="ϟ" :options="[
    'Turn on those around them or lash out in retaliation',
    'Cower, flee, or become unresponsive',
    'Get put at a terrible disadvantage',
    '(Identity only) Allow a PC to ask them a question, which they must answer honestly',
    '(Comprehension only) Become entranced, unable to focus on anything but the thing they experienced',
    '(Horror only) Turn weak, cowardly, or wrathful',
]"/>

<p>
    PCs must always take 1 Bane.  In addition, they...
</p>
<Options bullet="ϟ" :options="[
    'Flee from the scene',
    'Lash out in retaliation',
    'Cower or become unresponsive for a moment (the GM will say how long)',
    'Allow whatever harmed them to ask a question, which they must answer honestly',
    'Get put at a terrible disadvantage',
    '(Identity only) <working on it...>',
    '(Comprehension only) <working on it...>',
    '(Horror only) <working on it...>',
]"/>
</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>
