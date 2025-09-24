<script setup>
    defineProps({meal: Object})
</script>

<template>
    <div class="item-block">
        <img 
            :src="'/public/images/meals/' + meal.image" 
            alt="Фотографія страви" 
            class="meal-img"
        />
        <div class="item-texts">
            <h3>{{ meal.name }}</h3>
            <p class="meal-description">{{ meal.description }}</p>
            <h4>{{ meal.price }} грн</h4>
        </div>
    </div>
</template>

<style>
    .meal-img {
        width: 9rem;
        height: 9rem;
        border-radius: 4.5rem;
        object-fit: cover;
    }
    .meal-description {
        margin-top: 0.5rem;
        margin-bottom: 1rem;
    }

    @media (max-width: 1024px) {
        .meal-img {
            width: 5rem;
            height: 5rem;
            border-radius: 2.5rem;
        } 
        .meal-description {
            margin-top: 0.25rem;
            margin-bottom: 0.5rem;
        }
    }
</style>