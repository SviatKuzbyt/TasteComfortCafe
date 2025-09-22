<script setup>
import CafeTopBar from './components/CafeTopBar.vue';
</script>

<template>
  <div class="main">
    <cafe-top-bar></cafe-top-bar>
    <p>Hello!</p> 
  </div>
</template>

<style>
  .main{
    margin: 0;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 10rem;
    padding-right: 10rem;
  }

  p {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', serif;
    font-weight: 400;
    font-size: 1.125rem;
    color: #060A06;
  }

  @media (max-width: 768px) {
    .main {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
</style>