<script setup>
    import MealItem from './MealItem.vue';
    defineProps({meals: Array})
</script>

<template>
    <div class="meal-list">
        <meal-item v-for="meal in meals" :key="meal.id" :meal="meal"/>
    </div>
</template>

<style>
    .meal-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    @media (max-width: 1024px) {
        .meal-list {
            grid-template-columns: 1fr;
            gap: 1rem;
        }
    }
</style>