<!-- ============================== Script ============================== -->
<script setup>
import Options from '@/components/Options.vue';
import SidebarMenu from '@/components/SidebarMenu.vue';
import SidebarPage from '@/components/SidebarPage.vue';
</script>

<!-- ============================== Template ============================== -->
<template>
<SidebarPage :initHidden="() => true">
<template v-slot:sidebar>
<div class="sidebar">
    <SidebarMenu
        :links="[
            { label: 'Pocket Reality', hash: 'title', links: [
                { label: 'Visitors', hash: 'visitors' },
                { label: 'Axioms', hash: 'axioms' },
                { label: 'Rituals', hash: 'rituals', links: [
                    { label: 'Feast', hash: 'ritual_feast' },
                    { label: 'Grounding', hash: 'ritual_grounding' },
                    { label: 'Electric', hash: 'ritual_electric' },
                ] },
            ] },
        ]"
    />
</div>
</template>
<template v-slot:page>
    <h1
        id="title"
        class="title"
        >
        Pocket Reality
    </h1>
    <blockquote>
        If I had a world of my own, everything would be nonsense. Nothing would be what it is, because everything would be what it isn't. And contrary wise, what is, it wouldn't be. And what it wouldn't be, it would. You see?
        <figcaption>Lewis Carroll</figcaption>
    </blockquote>
    <p>
        The lion's share of a sin eater's job takes place in the alternate, liminal realities contained within other people.  These places have gone by many names over time: figment space, the mental world, the mindscape, the soulscape.  Freud might have called it the home of the unconscious.  Most formally, we call it <em>pocket reality</em>.
    </p>
    <p>
        A Pocket reality is a self-contained world.  Not so much a real place as a dream of reality, and all the figments inside are themselves projections of some real thing.  Every person, without conscious intent or design, whether they're aware of it or not, maintains their own pocket containing all their thoughts and emotions and harbored joys and indulgent secrets, all alive and active in this universe.
    </p>
    <p>
        The general populace doesn't consort with pocket reality.  A person may grasp at slivers of their pockets through dreams or feverish pitches with barely a mote of comprehension.  Science rankles over investigations in psychial forces.  Charlatan hustlers pushed the paranormal into theatrical spotlights, only to have been rebuked by congress.  The heritage of pocket reality survives behind closed doors and out-of-the-way corners, shuffled between seance and spiritism.
    </p>

    <h2 id="visitors">
        Visitors
    </h2>
    <p>
        Despite the public's ignorance a visit into pocket reality is a time-honored tradition, through spirit journey and shamanic guides, from psychotropic flora and occult practices guarded within family legacy.  Sin Eating itself was introduced to America three hundred years prior with the european settlers; those settlers having worked the ritual for generations already.
    </p>
    <p>
        A Visitor is someone who travels to other pocket realities.  Someone who, invited or not, has the means or the method to infiltrate another person.  Visitors come from all walks, and deal in business of all kinds.  For every mind-healer you'll find a spook rummaging for secrets.  For every exorcist, an ideologue who twists the underpinnings of belief toward some new inception.  It's no surprise that people regard visitors with apprehension.  The ability to reach inside someone and change them, in ways invisible and barely understood by that host, is a questionable practice at best.
    </p>
    <p>
        For all this boon, what does a visitor gamble with to do their work?  Their mind, in a manner of speaking.  Visitors don't enter pocket space in flesh and blood.  They're immaterial, simply projections.  As much a figment of the distantly real as the rest of the pocket.  But also still tethered to the source.  As if connected by telegram cable the projection transmits its experiences to the body, for all the hazards to be revealed on return.
    </p>
    <p>
        That connection is the Sin Eater's gambit.  Their means of pulling sin from the pocket into themselves.   If a connection didn't exist, if you weren't subject to the harm you experienced in the pocket, then all this would be a sham.  You'd be one more psychic con artist.
    </p>

    <h2 id="axioms">
        Axioms
    </h2>
    <p>
        Four axioms govern pocket reality:
    </p>
    <div class="miniBorder">
        <br>
        <Options numbered asHtml :options="[
            'Everything within is <em>a part of the person</em>.  Anything that affects the pocket may reflect on that person\'s psyche in some outward way.',
            'As a visitor, anything that affects your projection may then <em>reflect onto yourself</em>.',
            'Things are as <em>real as they seem</em>.  The figments and denizens are independent, willful and conscious.  The objects are solid.  Your experience is truth.',
            '<em>All other bets are off</em>.  No rule of physics, logic, or rationality must maintain its laws here as it would in the real world.',
        ]"/>
        <br>
    </div>
    <p>
        No two pockets are alike.  Visitors might find themselves stranded within phantasmagoria, or in the unremarkable.  The world around them can shift suddenly from one effect into the other.  Veterans learn to watch every step, even in the most mundane circumstances.  And yet, for all that mercurial change, the third axiom persists: your experience is truth.  However these places present themselves they are as real as any other experience.
    </p>

    <h2 id="rituals">
        Rituals
    </h2>
    <p>

    </p>
    <blockquote>
        “To enter into all the details of your feelings I have no right, and besides, I regard that as useless and even harmful,” [...] “Ferreting in one's soul, one often ferrets out something that might have lain there unnoticed."
        <figcaption>Alexey Alexandrovitch</figcaption>
    </blockquote>

    <p>
        Visitors enter pocket realities using all kinds of means: scientific, naturalist, and meditative.  Every method of entrance requires a ritual.  Some to prepare the visitor, some to prepare the host.  Most times to do both.  But the ritual alone is rarely enough.  For Sin Eaters, the true key lies in tiny vials of fluid, each adorned by a paper tag reading <i>Drink Me</i>.  Tinctures to release the mind from the body.
    </p>
    <p>
        You might think that all the song and dance that surrounds is unnecessary when a simple sip of the stuff would suffice, and for that you'd be wrong.  Every part of the process has its place.  All people, the sinners and the eaters both, find comfort in routine.  Mundane gesture sets time and space aside for the mind to ease into the transition.  Time to isolate focus.  Space to quiet the nerves.
    </p>
    <p>
        For a willing recipient a <i>Drink Me</i> can bring near anyone into their pocket.  Without preparation the journey is all cacophony and turmoil or worse: disassociation.  The ritual is about safe passage.
    </p>

    <!-- ----- the feast ------ -->
    <h3
        id="ritual_feast"
        class="lineTo indent"
    >
        Feast
    </h3>
    <p>
        The old ways have survived the generations of this work for good reason: they're simple, reliable, and effective enough.  Feasting is a human tradition from time immemorial.  To relish the hunt and celebrate the summer moon, it was always food which brought us together in reverie.
    </p>
    <p>
        A ritual feast is a simple process.  Almost quaint, at times.  You need food, though it needn't be much, to pass over the body.  The eater must speak their oath of solemn duty before any vittle passes their lips.  Then, the food may be eaten: the symbol of sin, passing from the sinner to the eater.  Finally, the drink, and we all know about the drink: a coin on the tongue; transport from this reality to the next.
    </p>
    <h4>
        Requirements
    </h4>
    <p>
        The sinner and the eaters must occupy a room together. A host must provide the eaters some food, touched by or passed over the body of the sinner.  The sinner and the eaters must remain in the room together until the ritual is complete.
    </p>
    <h4>
        Drawbacks
    </h4>
    <p>
        There's hardly a problem to be found with the feast.  The pocket reality is well prepared for the introduction of its guests, and the demons inside rarely the wiser to the changes.  Often the hosts themselves are the nastiest nuisance, wanting little to do with the entire procession.  Let them have their fits.  These can be difficult times for all involved.
    </p>
    <h4>
        Start With:
    </h4>
    <Options bullet="ϟ" :options="[
        'Instability: 1',
        'Bane: 0',
        'Security: normal',
    ]"/>
    <br>

    <!-- ----- the grounding ------ -->
    <h3
        id="ritual_grounding"
        class="lineTo indent"
    >
        Grounding
    </h3>
    <p>
        Of all the ways to enter a pocket reality, grounding is the safest by far.  It's akin, I suppose, to being led into someone's house.  You arrive at the door, they answer the knocker and usher you in, and you step through that portal, the click of the latch behind you severing the world outside from the one within.
    </p>
    <p>
        Getting to that point takes dedication and time, and some intimacy of a sort.  People tend not to find it palatable, keeping an eater around them like that, as if they're welcome company.  Those who will stomach it rarely still have the time, or are willing to pay the additional fees.  It's unfavorably rare, as a result, to have the opportunity to take the safe route in.
    </p>
    <h4>
        Requirements
    </h4>
    <p>
        The sinner and the eaters must form a chain, where each person maintains physical contact with two others throughout the ritual.  All involved meditate on the contact and presence of the others, blocking out all other sensation and thought until the spirit separates from the body.
    </p>
    <h4>
        Drawbacks
    </h4>
    <p>
        The most difficult aspect of grounding is the meditation ritual.  Even with practice and patience, even in easy times, the separation of mind and body is laborious.  Just finding the right space can take each person hours.  Sometimes it's a full day, waiting on hunger and thirst to be what pushes you into the pocket.  And if lucky you won't be interrupted midway through the process.  The second most difficult part is the cost.  Time is money, and that goes for the eaters as much as anyone.  The pitch is, of course, that grounding minimizes any disturbance to the person being helped.  But how much use is a promise like that when the person lies on their deathbed?
    </p>
    <h4>
        Start With:
    </h4>
    <Options bullet="ϟ" :options="[
        'Instability: 0',
        'Bane: 0',
        'Security: calm',
    ]"/>
    <br>

    <!-- ----- the electric ------ -->
    <h3
        id="ritual_electric"
        class="lineTo indent"
    >
        Electric
    </h3>
    <p>
        Modern science brings us marvels and machinations.  Electricity especially pioneers the new era, with galvanic treatments and electro-convulsion therapies, and who knows what lies waiting for discovery beyond?  A machine that sparks new life into mind and muscle altogether, perhaps.
    </p>
    <p>
        For sin eaters electricity introduced a particular, previously unavailable, means of entry: that of overwhelming force.  Some people have minds like iron safes, permitting only those with key or combination inside.  Others, most unfortunate, have slid too far from sane and stable thinking to permit the eater inside.
    </p>
    <p>
        There, under duress, when the old methods fail, we turn to science instead.  We hook ourselves up with wires and plates all conjoined in a circle.  Fastened our limbs in place.  And in trepidation we wait out the final seconds for someone to crank the box and thunder us through the cables.
    </p>
    <h4>
        Requirements
    </h4>
    <p>
        The sinner and the eaters must all be hooked up to a single generator.  Often a hand-cranked electro-magnet is used, though any source of electricity will do.
    </p>
    <h4>
        Drawbacks
    </h4>
    <p>
        The electric ritual is a violent means of entry.  Like battering down a door, the entrance is all crashing and belligerent noise leaving debris in its wake.  Neither the sinner nor the eaters tend to manage this passage painlessly.  Their arrival is sudden, often unwelcome, stirring tumult and agitation throughout the figment space.
    </p>
    <h4>
        Start With:
    </h4>
    <Options bullet="ϟ" :options="[
        'Instability: 1',
        'Bane: 1',
        'Security: normal',
    ]"/>

</template>
</SidebarPage>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>
