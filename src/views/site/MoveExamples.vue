<!-- ============================== Script ============================== -->
<script setup>
import Move from '@/components/Move.vue';
import Options from '@/components/Options.vue';

const moveOptions = [
    "I can choose this one.",
    "Or this one.",
    "But really the third is my favorite.",
];

const customBullet = "⫸";
const customPrefixRolls = ["10+", "7-9", "6-"];
const customPrefixSymbols = ["≽", "⌱", "⋟"];
const customPrefixHPM = ["H:", "P:", "M:"];
</script>

<!-- ============================== Template ============================== -->
<template>
<div class="moveExamples">
<div class="hint">-- With preconditions</div>
<Move id="w_preconditions">
    <template v-slot:name>Example Move With Preconditions</template>
    <template v-slot:preconditions>Requires: preconditions</template>
    <template v-slot:body>
        This describes the move in all of its glory...
    </template>
    <template v-slot:example>Example Text...</template>
</Move>
<br>

<div class="hint">-- Without preconditions</div>
<Move id="wo_preconditions">
    <template v-slot:name>Example Move Without Preconditions</template>
    <template v-slot:body>
        This describes the move in all of its glory.  Glorious glory.  My oh my look at the text.
    </template>
    <template v-slot:example>Example Text...</template>
</Move>
<br>

<div class="hint">-- A more complicated description</div>
<Move id="complicated_desc">
    <template v-slot:name>Example Move With Complicated Description</template>
    <template v-slot:preconditions>Requires: preconditions</template>
    <template v-slot:body>
        <div>Suppose I want to do something a little more fancy... </div>
        <h2 class="hint">LIKE THIS!</h2>
        <div>I shouldn't do that, actually.  Bad form to use headers where I shouldn't.  And it's not like I don't know that it already works.  I'm a fuggin developer after all.  Slots aren't exactly black magic.</div>
    </template>
    <template v-slot:example>Example Text...</template>
</Move>
<br>

<div class="hint">-- With a border</div>
<Move bordered id="bordered">
    <template v-slot:name>Example Move With A Border</template>
    <template v-slot:preconditions>Requires: preconditions</template>
    <template v-slot:body>This one needs lots of text so that we can show the nice big fancy border around it that borders the text and all the fanciness my oh my what wonders we shall produce with enough text that there's substantial space for a border to look impressive yes oh yes oh my oh me oh yes.</template>
    <template v-slot:example>Example Text...</template>
</Move>
<br>

<div class="hint">-- With horizontal rules</div>
<Move ruled id="ruled">
    <template v-slot:name>Example Move With Horizontal Rules</template>
    <template v-slot:preconditions>Requires: preconditions</template>
    <template v-slot:body>This one needs lots of text so that we can show the nice big fancy border around it that borders the text and all the fanciness my oh my what wonders we shall produce with enough text that there's substantial space for a border to look impressive yes oh yes oh my oh me oh yes.</template>
    <template v-slot:example>Example Text...</template>
</Move>
<br>

<div class="hint">-- A move with options</div>
<Move id="w_options">
    <template v-slot:name>Example Move With Options</template>
    <template v-slot:body>
        When you <b>do a thing</b>, roll +something, then consider your options:
        <Options :options="moveOptions" />
    </template>
    <template v-slot:example>Example Text...</template>
</Move>
<br>

<div class="hint">-- A move with selectable options</div>
<Move id="selectable_options">
    <template v-slot:name>Example Move With Selectable Options</template>
    <template v-slot:body>
        When you <b>do a thing</b>, roll +something, then consider your options:
        <Options :options="moveOptions" selectable bulletSize="1.25em"/>
    </template>
    <template v-slot:example>Example Text...</template>
</Move>
<br>

<div class="hint">-- A move with a custom bullet</div>
<Move id="custom_bullet">
    <template v-slot:name>Example Move With Custom Bullets</template>
    <template v-slot:body>
        When you <b>do a thing</b>, roll +something, then consider your options:
        <Options :options="moveOptions" :bullet="customBullet" bulletSize="2em"/>
    </template>
    <template v-slot:example>Example Text...</template>
</Move>
<br>

<div class="hint">-- A move with various prefixed options</div>
<Move id="prefixed_opts">
    <template v-slot:name>Example Move With Outcome Ranges</template>
    <template v-slot:body>
        When you <b>do a thing</b>, roll +something, then consider your options:
        <Options :options="moveOptions" :prefixes="customPrefixRolls" bulletWidth="40px"/>
    </template>
    <template v-slot:example>Example Text...</template>
</Move>
<br>

<div class="hint">-- A move with various prefixed symbols</div>
<Move id="prefixed_symbols">
    <template v-slot:name>Example Move With Unique Symbols</template>
    <template v-slot:body>
        When you <b>do a thing</b>, roll +something, then consider your options:
        <Options :options="moveOptions" :prefixes="customPrefixSymbols" bulletSize="1.75em"/>
    </template>
    <template v-slot:example>Example Text...</template>
</Move>
<br>

<div class="hint">-- A move with a shaded backdrop</div>
<Move id="shaded" shaded>
    <template v-slot:name>Example Move With Shaded Background</template>
    <template v-slot:body>
        When you <b>do a thing</b>, roll +something, then consider your options:
        <Options :options="moveOptions" :prefixes="customPrefixHPM"/>
    </template>
    <template v-slot:example>Example Text...</template>
</Move>
<br>

<div class="hint">-- A move with a shaded and bordered backdrop</div>
<Move id="shaded_bordered" shaded bordered>
    <template v-slot:name>Example Move With Shaded and Bordered Style</template>
    <template v-slot:body>
        When you <b>do a thing</b>, roll +something, then consider your options:
        <Options :options="moveOptions" :prefixes="customPrefixHPM"/>
    </template>
    <template v-slot:example>Example Text...</template>
</Move>
<br>

<div class="hint">-- A move with a shaded and ruled backdrop</div>
<Move id="shaded_ruled" shaded ruled>
    <template v-slot:name>Example Move With Shaded and Ruled Style</template>
    <template v-slot:body>
        When you <b>do a thing</b>, roll +something, then consider your options:
        <Options :options="moveOptions" :prefixes="customPrefixHPM"/>
    </template>
    <template v-slot:example>Example Text...</template>
</Move>
<br>

<div class="hint">-- A move with a leftlined body</div>
<Move id="leftLined" leftLined>
    <template v-slot:name>Example Move With LeftLined Style</template>
    <template v-slot:body>
        When you <b>do a thing</b>, roll +something, then consider your options:
        <Options :options="moveOptions" :prefixes="customPrefixHPM"/>
    </template>
    <template v-slot:example>Example Text...</template>
</Move>
<br>

<div class="hint">-- A move with a shaded and leftLined body</div>
<Move id="shaded_leftLined" shaded leftLined>
    <template v-slot:name>Example Move With Shaded and LeftLined Style</template>
    <template v-slot:body>
        When you <b>do a thing</b>, roll +something, then consider your options:
        <Options :options="moveOptions" :prefixes="customPrefixHPM"/>
    </template>
    <template v-slot:example>Example Text...</template>
</Move>
<br>
<br>
</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>
