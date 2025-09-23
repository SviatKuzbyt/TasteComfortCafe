<script setup>
    import MealService from '@/services/MealService';
    import AboutCafe from '@/components/AboutCafe.vue';
    import MealList from '@/components/meal/MealList.vue';

    import { ref } from 'vue';

    const mealService = MealService
    const recomendations = ref(mealService.getRecommendations())
</script>

<template>
    <about-cafe></about-cafe>
    <body class="homeContent">
        <h2 class="subtittle">Рекомендуємо</h2>
        <meal-list :meals="recomendations"></meal-list>
    </body>
</template>

<style>
    .homeContent {
        padding: 0 10rem;
        display: flex;
        flex-direction: column;
    }
    .subtittle {
        margin-top: 3rem;
        margin-bottom: 1rem;
    }

    @media (max-width: 1024px) {
        .homeContent {
            padding: 0 1rem;
        }
    }
</style>