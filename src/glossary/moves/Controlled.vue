<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Controlled';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="controlled" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        <p>
            Whenever you use a move, you can <strong>describe your character acting with strenuous control</strong>.  If you do, roll an additional 1d6 and add its value to the dice you pulled from your pool.  If the die you rolled is higher than your Bane, you're safe, everything goes fine.  If it is equal to or lower than your current Bane, or if it rolls a 1, you're screwed.  Increase your Bane by 1, then the GM will tell you how, in your attempt to get things just right, you took valuable extra time or caused half the effect you wanted.
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