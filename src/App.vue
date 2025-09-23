<script setup>
import CafeTopBar from './components/topbar/CafeTopBar.vue';
import CafeFooter from './components/CafeFooter.vue';
</script>

<template>
  <div class="main">
    <cafe-top-bar></cafe-top-bar>
    <router-view></router-view>
    <cafe-footer></cafe-footer>
  </div>
</template>

<style>
  body {
    margin: 0;
    padding: 0;
  }
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

  h1, h2, h3, h4 {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', serif;
    font-weight: 700;
    font-size: 3rem;
    color: #060A06;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.125rem;
  }

  @media (max-width: 1024px) {
    .main {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.25rem;
    }

    h4 {
      font-size: 1rem;
    }

    p {
      font-size: 1rem;
    }
  }
</style>