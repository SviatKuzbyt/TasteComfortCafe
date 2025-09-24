<script setup>
  import CafeTopBar from './pages/other/CafeTopBar.vue';
  import CafeFooter from './pages/other/CafeFooter.vue';
</script>

<template>
    <cafe-top-bar/>
    <router-view/>
    <cafe-footer/>
</template>

<style>
  body {
    margin: 0;
    padding: 0;
  }
</style>