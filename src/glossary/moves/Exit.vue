<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";

const name = 'Exit';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="exit_bane" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        <p>
            When you <strong>exit a pocket reality</strong>, roll <em>1d12+BANE</em> then set your Bane to 0.  On a <b>12+</b> the gm/player chooses two/gains 2 hold.  On a <b>5-9</b> the gm/player chooses one/gains 1 hold.  (if hold, spend 1:1 to…).  The same option may be chosen more than once.
        </p>
        <Options bullet="ϟ" :options="[
            'You give in to vice or decadence.',
            'You disconnect from people and are unreachable for a period of time.',
            'You take it out on someone close to you.',
            'You gain a hitch-hiker.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        <p>Todo</p>
        <h3 class="lineTo indent">In Play</h3>
        <div class="playExample miniBorder">
        <p>Skipping play examples for now.</p>
        </div>
    </template>
</Move>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>