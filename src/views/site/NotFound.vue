<!-- ============================== Script ============================== -->
<script setup>
</script>

<!-- ============================== Template ============================== -->
<template>
<div class="notFound">
    <div>That url isn't part of Sin Eaters.</div>
    <div>Go <router-link to="/">home.</router-link></div>
</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
.notFound {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>