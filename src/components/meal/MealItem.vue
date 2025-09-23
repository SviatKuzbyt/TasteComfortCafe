<script setup>
    defineProps({meal: Object})
</script>

<template>
    <div class="meal-block">
        <img :src="'/public/images/meals/' + meal.image" alt="Фотографія страви" class="meal-img"/>
        <div class="meal-texts">
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
    .meal-block {
        background-color: #EBF0EC;
        padding: 1.5rem;
        border-radius: 1.5rem;
        display: flex;
        flex-direction: row;
        gap: 1.5rem;
    }
    .meal-texts {
        display: flex;
        flex-direction: column;
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
        .meal-block {
            padding: 1rem;
            gap: 1.rem;
        }
    }
</style>