<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Interfere';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="interfere" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        <p>
            When you <em>thwart or impede</em> another PC to stop them from achieving their goals, describe how you get in their way and make life difficult.  Any risk or dangers that occur as a result will affect both of you.  Remove a die from your pool and reroll it .  The player you helped immediately subtracts its value from their current roll.
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