<!-- ============================== Script ============================== -->
<script setup>
import Options from '@/components/Options.vue';
import ExitBane from '@/glossary/moves/ExitBane.vue';
</script>

<!-- ============================== Template ============================== -->
<template>
<div>
<h1 class="title">
    Bane, Instability, and Malefaction
</h1>
<div class="quote">
    <p>
        What you do for others is an act of self sacrifice.  Sin doesn’t simply disperse into the ether.  It requires someone to shoulder the burden, to bear responsibility, to struggle with a deed that festers and yearns to consume them.
    </p>
    <p>
        But, well, you know that already, don't you?  Not because of your trade, oh no.  You knew this before you became a sin eater.  After all, you're as human as the rest of us, and we all have reason to harbor a scouling little grief deep within.  When it's your day to call out for help, to let someone enter you and shoulder your burden, what monsters do you suppose they'll find?
    </p>
</div>

<h2>
    Malefaction
</h2>
<p>
    A sin eaters job is to bear the sin of others.  You're paid to do this, and possibly paid well, but the affliction you suffer along the way is terrible, and the consequences heavy.  In the game, you'll track your character's progression with <em>Malefaction</em>.
</p>
<p>
    Gain Malefaction when you:
    <Options bullet="⌭" :options="[
        'put another’s sin to rest',
        'commit a sin (your character decides when you cross this line)',
    ]" />
</p>
<p>
    The rub, of course, is that taking on someone else's sin is only one of the ways to increase your malefaction.  The other is to commit a sin of your own.  We're not here to tell you what sin is.  Most of the time it should be obvious (did your character do something that made you recoil?).  Other times you may want to draw the line on your own, and no one else gets to say if you have or haven't crossed it.
</p>
<p>
    Developer's note: we're not sure what malefaction is doing yet.  It has a shape, but not a purpose.  These additions will come in due time, stick with us.
</p>

<h2>
    Instability
</h2>
<div class="quote">
    <p>
        Wittingly or not, every person curates an internal universe; each mote and fiber of that place is some reflection of their being.  As a sin eater your job is to trespass into their world.  But inside place you're a foreign object: a lost explorer at best, invader at worst.  No earthly law is guaranteed to hold.  All of your prior experience is forfeit, subject to the rules and whims of this strange reality.
    </p>
</div>
<p>
    Humans aren't meant to experience the figment space of the mind.  Merely entering one can be a destabilizing ordeal.  The longer you remain inside the worse it gets.  The edges between you and them, you and not you, is and isn't, should and shouldn't be, they all begin to blur.
</p>
<p>
    In the game you'll keep track of this degeneration via <b>Instability</b>.  Instability starts at 1 and caps at 12.  You only keep track of it while your character is inside a pocket reality.  Once you're out, in the real world again, everything is stable.
</p>
<p>
    Your Instability increases when you roll a new pool of dice.  Every time you <b>roll a dice pool</b>, including the very first time, you take a token of Instability.  Since you roll a pool as soon as you enter a pocket reality, that's when you start keeping track by setting your Instabilty, initially, to 1.
</p>
<p>
    A breaches occurs when you have 3, 6, 9, or 12 tokens.  Each time you breach, the GM gets to introduce something bad in the form of one of the following:
    <Options bullet="⌭" :options="[
        'the pocket reality is somehow altered by your presence',
        'you are somehow altered by the pocket reality',
        'you let loose a hitch-hiker (think of Mal coming after Cobb in Inception)',
        'security has their attention drawn to your character or situation',
        'a counter-agent appears or advances their agenda',
    ]" />
</p>

<h2>
    Bane
</h2>
<p>
    Bane is still a work in progress.  We know you can choose to take it when you take harm.  But what is it, really?  A condition?  Maybe.  We're thinking on it.  One of our ideas goes like this:
</p>
<p>
    <ExitBane />
</p>

</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>
