<!-- ============================== Script ============================== -->
<script setup>
import HLink from '@/components/HLink.vue';
import Options from '@/components/Options.vue';
import Aid from '@/glossary/moves/Aid.vue';
import Controlled from '@/glossary/moves/Controlled.vue';
import Desperation from '@/glossary/moves/Desperation.vue';
import Interfere from '@/glossary/moves/Interfere.vue';

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
            "This lady is all kinds of shifty," Emilie says, "I think she's got something she's hiding.  I'm going to go up and look her in the eye and say, 'you're awful quiet.  I think you're holding out.  Gonna spill it?'"
        </p>
        <p>
            "Okay," the GM agrees, "lets get a roll.  We're still in the real world, so thats one D12."
        </p>
        <p>
            <i>Emilie rolls a 9.</i>  "So close," she says.
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

    <HLink
        id="modifiers"
        :h="embedded ? 3 : 2"
    >
        Modifiers
    </HLink>
    <p>
        Unsatisfied with your lot? Perhaps you'd like to push your chances, or look to a dear friend for assistance.  You've a couple options.  You can make a <em>Controlled</em> or <em>Desperate</em> act to give yourself the edge (by taking on some additional risk).  Or another player can amend your roll with <em>Aid</em> or <em>Interference</em>.
    </p>
    <Desperation />
    <Controlled />

    <div class="playExample">
        <p>
            "Adel's just about to the basement doorway," the GM warns. "If he makes it through, you've pretty much lost any chances of catching him and getting your answers."
        </p>
        <p>
            "Cripes," Keepers mutters, "Okay, so I have a 2 and a 3 in my pool.  That's not going to cut it.  If I reroll the pool my Instability goes to... 9, which means you get to introduce something bad?"  The GM nods in agreement.  With a sigh, Keepers says, "I think I'm going to do something desperate here.  So, I originally wanted to grab this dude by the shoulder or his coat or something.  Seeing him get near the door, I'm going in for a tackle instead."
        </p>
        <p>
            <i>Keepers rolls a d6 for desperation: a 3</i>.  "Good news and bad news," the GM muses, "that's an 8 total, so you succeed, you catch this guy!"
        </p>
        <p>
            "Finally!"
        </p>
        <p>
            "But it was a partial success, so there's cost, complication, or a problem.  You went in for a tackle, right?  You took Adel down way harder than you intended.  So he's going to take a bit of damage to the noggin.  Also, what's your Bane right now."
        </p>
        <p>
            Keepers looks at his character sheet, "hmm, 3.  Oh, oh that's bad."
        </p>
        <p>
            "Yeah, it is.  Your desperation rolled 3, which means you took this too far.  So, first, increase that to 4.  Second, you really worked him over.  Adel is in a heap and bleeding all over the place.  When you try to sit him up he's barely responsive, which means he's probably concussed as well.  He needs medical attention as quickly as possible."
        </p>
    </div>
    <br>

    <Aid />
    <Interfere />

    <div class="playExample">
        <p>
            Emilie looks over the figment of Meridith, "How bad is the sickness?  Could I cure her if I <i>Tamper</i> with it?" she asks.
        </p>
        <p>
            The GM thinks for a moment, "I don't think you could cure her entirely.  She's the plaguebearer herself, the sickness is a part of her.  But you could certainly stabilize her condition, maybe help her take control of it."
        </p>
        <p>
            "Gotta do what I can," Emilie says.  "I start rolling up my sleeves.  Anyone want to help me with this?  I'm all out of sedative, and I'll probably need an assistant just in case."
        </p>
        <p>
            "How can I help?" Jazy asks.
        </p>
        <p>
            "Will it count as an Aid if have Jazy around through this?"
        </p>
        <p>
            "Sure," the GM agrees.
        </p>
        <p>
            "Okay," Emilie begins, "I grab some clean cloth and fill up a metal bowl with some water and start giving you instructions: use this to keep her clean, especially if she vomits or anything; hold her arms against the table if she tries to sit up; keep her head steady; that sort of thing.  Ready?"
        </p>
        <p>
            "Ready," Jazy says.
        </p>
        <p>
            <i>Emilie takes two of the last three dice from her pool: 5, 1, and 1.  Jazy takes a 3 from her pool and rolls it again: 4.</i>
        </p>
        <p>
            "Woo! 10!"
        </p>
        <p>
            "Good job," the GM says, "this is going to take you a bit of time to complete- and I want to hear what it looks like for you to <i>Tamper</i> with a figment this way- but by the end she'll be in much better condition.  Might even be able to take control of the plague again."
        </p>
    </div>

</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>