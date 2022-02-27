<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Aid';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="aid" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        <p>
            When you <em>join efforts</em> with another PC to help them out, describe what you're doing to help them achieve their goal.  Any risk or dangers that occur as a result will affect both of you.  Remove a die from your pool and reroll it .  The player you helped immediately adds its value to their current roll.
        </p>
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