<!-- ============================== Script ============================== -->
<script setup>
import HLink from '@/components/HLink.vue';
import Options from '@/components/Options.vue';
defineProps({
    embedded: {
        type: Boolean,
        description: "alters the display for when embedded into a separate page",
    },
});
</script>

<!-- ============================== Template ============================== -->
<template>
<div class="rolling">

    <HLink
        id="rolling"
        :h="embedded ? 2 : 1"
        :title="!embedded"
    >
        Rolling Dice
    </Hlink>
    <p>
        Sin Eaters uses two sets of rolling mechanics.  When your character is out in the real world, you roll a solitary D12.  When inside a pocket reality, you swap that out for a D6 dice-pool.
    </p>

    <HLink
        id="real_world"
        :h="embedded ? 3 : 2"
    >
        The Real World
    </Hlink>
    <p>
        When you're in the real world, all rolls use a D12.  Each roll can have one of three possible results:
    </p>
    <Options bullet="ϟ" asHtml :options="[
        '<b>4-</b>: a miss.  The GM will tell you what happens (it won\'t be good).',
        '<b>5-9</b>: a partial success.  Whatever you tried to do, you do it.  However, something goes wrong in the doing.  The GM will tell you what kind of cost, new danger, or partial result you can expect.',
        '<b>10+</b>: success!  You do it.',
    ]" />

    <div class="playExample">
        <p>
            "This lady is all kinds of shifty," Emmy says, "I think she's hiding something.  I'm going to go up and look her in the eye and say, 'you're awful quiet.  I think you're holding out.  Gonna spill it?'"
        </p>
        <p>
            "Okay," the GM agrees, "lets get a roll.  We're still in the real world, so thats one D12."
        </p>
        <p>
            <i>Em rolls a 9.</i>  "So close," she says.
        </p>
        <p>
            "Suzie, the lady, tries to look away and ignore you.  When she realizes you aren't leaving she sighs.  'Look,' she says in a whisper, 'this isn't the sort of thing I can just blurt out.  It's a family secret, one that my brother has worked hard to keep silent.  Get him out of here.  I can't say it with him around, and he's been watching me like a hawk.'"
        </p>
    </div>

    <HLink
        id="figment_space"
        :h="embedded ? 3 : 2"
    >
        In Figment Space
    </Hlink>
    <p>
        Pocket realities get a bit more complicated than the real world.  Instead of a single die, you'll roll a pool of them.  Five, to be exact.  5D6.  You won't use these dice right away.  As soon as you step into someone's mind you roll your initial pool and hold onto it.  Later on during play you'll hit a situation where the outcome isn't clear, and the GM will ask you to use those dice to figure out the result.
    </p>
    <p>
        Using your pool is simple.  Spend as many dice as you want, up to five at a time, and sum up their values to get one of three results:
    </p>
    <Options bullet="ϟ" asHtml :options="[
        '<b>6-\</b>: a miss.  The GM will tell you what happens (it won\'t be good).',
        '<b>7-9</b>: a partial success.  Whatever you tried to do, you do it.  However, something goes wrong in the doing.  The GM will tell you what kind of cost, new danger, or partial result you can expect.',
        '<b>10+</b>: success!  You do it.',
    ]" />
    <p>
        Dice can be mixed and matched however you want.  Spend all of them at once to get above a 10 and a full success?  Parcel them out for two 7's instead?  That's up to you!  But beware, every time you reroll your pool, you're going to take on...
    </p>

    <HLink
        id="instability"
        :h="embedded ? 3 : 2"
    >
        Instability
    </Hlink>
    <p>
        When inside a pocket reality, you can reroll your dice pool anytime you want.  Stuck with a single 1?  Reroll your pool!  You rolled five 1's?  Reroll your pool!  Out of dice?  Well, now you have to reroll your pool!
    </p>
    <p>
        Every time you reroll, you take a token of <em>Instability</em>.  Within other people's realities you're an anomaly.  A germ.  A foreign object.  Likewise, you're out of your element, too.  The longer you stay there, the more your Instability builds, eventually causing a breach.
    </p>
    <div class="playExample">
        <p>
            "That enormous beast, whatever it is," the GM explains, "it's got a guy in its jaws and is dragging him down the street.  He's screaming and flailing at it, there's dust kicking up everywhere, the going is petty slow."
        </p>
        <p>
            "Definitely want to put an end to that."  Keepers says, "how can I, like, distract it, or try and break the guy free?  I think I'm going to run over and kick that thing in its side.  Try and make it drop the dude."
        </p>
        <p>
            "That will need a roll, let's see how it goes."
        </p>
        <p>
            Keepers looks at his dice.  He only has one left, and it's a 5.  "Don't want to fail this one, I'm going to take Instability and reroll.  Lets see: 2, 5, 2, 4, 3.  I'm going to spend the 4 and 3, so that's 7, a partial success, right?"
        </p>
        <p>
            The GM nods, "yeah.  You give the beast a solid kick, causing it to drop the guy.  It immediately turns its attention to you, growling and snapping at your legs.  You're trying to avoid it, but those big jaws catch you by the foot, tugging at your boot.  What do you do?"
        </p>
    </div>

</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>