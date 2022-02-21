<!-- ============================== Script ============================== -->
<script setup>
import Options from '@/components/Options.vue';
</script>

<!-- ============================== Template ============================== -->
<template>
<div>
<h1 class="title">
    Character Creation
</h1>
<p>
    At this stage of development character generation is simple.  More to come in the future.  For now, let's get an idea of who you are.
</p>

<h2>
    What is your name?
</h2>

<h2>
    What are your pronouns?
</h2>

<h2>
    Which is your body?
</h2>
<br>
<Options bullet="⌭" :options="[
    'street urchin',
    'boxing champion',
    'medical university cadaver',
    'advertisement etching of the ideal man',
    'skin like pampered silk on a slight frame',
    'genetically advantageous for procreation',
    'carnival sideshow',
    'plump from wealth',
    'a statue worn and cracked over time',
]"/>

<h2>
    Which is your aspect?
</h2>
<br>
<Options bullet="⌭" :options="[
    'a trim corset for the modern woman',
    'stained in the smoke rising from brick factories',
    'blue sky daydreams of the wild west',
    'muck on the well traveled streets',
    'a child at the nickelodeon',
    'stranger in a strange land',
    'hawker singing praises of elixir and venom',
    'black glasses reflect the crackle of an electrical arc',
    'guitar and song at a crossroads',
    'the hanging man’s noose',
]"/>

<h2>
    How does your sin feel?
</h2>
<br>
<Options bullet="⌭" :options="[
    'a foot pressed on my chest',
    'it has four legs and three mouths and howls',
    'a portrait with the eyes gouged out',
    'blood on my lips, flesh for supper',
    'ice hanging from fingertips',
    'fairies dancing in my eyes',
    'a shadow haunts the basement',
    'breathing through a throat full of cotton',
    'its blade is sharper than mine',
]"/>

<h2>
    Who are you?
</h2>
<br>
<div class="cardHolder">
    <div class="card">
        <h4>The Remedy</h4>
        <p>
            I want to help you.  Come and let me tend to those wounds.  Show me where it hurts?  It's okay, the worst has already passed.  Tell me all about it, your secrets are safe with me and I have no judgment to pass.  There now, easy does it.  You're not alone any more, I'm with you now.  We'll face this together.
        </p>
    </div>

    <div class="card">
        <h4>The Weird</h4>
        <p>
            I'm finally at home in other peoples' reality.  Wonderlands of the mind, playgrounds of the soul, what better place to be? Set me up for tea with the hatters and the lighthouse wickys and all the mercurial figments inside.  We understand each other, they and I.  We see the fabric around us for what it is: theater cloth, props and fabrication.
        </p>
    </div>

    <div class="card">
        <h4>The Driven</h4>
        <p>
            I live for the hunt.  Blood and teeth in darkness.  The wait and the sudden strike.  Trap sprung and trail hot.  Adrenaline veins and blades drawn.  Can you find me a beast in the flesh with more crooked guile than sin incarnate? Is there another creature that can meet eyes with the hunter and know itself equal? I doubt so.
        </p>
    </div>

    <div class="card">
        <h4>The Trouble</h4>
        <p>
            I think it takes one to know one.  And I'd bet you believe that deep down these people, the things inside them, all want saving.  That's your mistake: trying to make a human out of the monster, looking for the good side.  Softness will ruin you.  Trust me, there's nothing to save in there.  So you best be ready to pull a trigger, when the time comes.
        </p>
    </div>

    <div class="card">
        <h4>The Hungry</h4>
        <p>
            I feel hollow and full of want.  These people, loaded with glimmer and riches, they have joys like faceted gems.  Dreams that glow.  Comfort and pleasure in pools and, ohhh, the ecstacy when you lap up the waters, it's like nothing the earthly tongue ever tastes. "Take my rot from me", they demand.  And I say, why shouldn't I take more than that?
        </p>
    </div>
</div>
</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
.cardHolder {
    display: flex;
    flex-wrap: wrap;
    gap: 24px 20px;
    justify-content: space-between;

    @media screen and (max-width: 900px) {
        gap: 16px 20px;
    }
}
.card {
    border: 1px solid var(--color-detail-lighter);
    border-radius: 8px;
    padding: 0 24px 12px 24px;
    flex-basis: 49%;

    @media screen and (max-width: 900px) {
        flex-basis: 100%;
    }
}
</style>
