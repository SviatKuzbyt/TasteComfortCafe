<script setup>
    import MealService from '@/services/MealService';
    import AboutCafe from '@/pages/other/AboutCafe.vue';
    import CafeList from '@/components/list/CafeList.vue';
    import MealItem from '@/components/list/MealItem.vue';
    import ReviewItem from '@/components/list/ReviewItem.vue';
    import { ref } from 'vue';
    import ReviewService from '@/services/ReviewService';

    const mealService = MealService
    const reviewService = ReviewService

    const recomendations = ref(mealService.getRecommendations())
    const reviews = ref(reviewService.getReviews())
</script>

<template>
    <about-cafe/>
    <body class="basic-page">
        <h2 class="subtittle">Рекомендуємо</h2>
        <cafe-list>
            <meal-item v-for="meal in recomendations" :key="meal.id" :meal="meal"/>
        </cafe-list>

        <h2 class="subtittle">Відгуки</h2>
        <cafe-list>
            <review-item v-for="review in reviews" :key="review.id" :review="review"/>
        </cafe-list>
    </body>
</template>

<style>
    .subtittle {
        margin-top: 3rem;
        margin-bottom: 1rem;
    }
</style>