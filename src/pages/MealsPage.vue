<script setup>
    import MealService from '@/services/MealService';
    import CafeList from '@/components/list/CafeList.vue';
    import MealItem from '@/components/list/MealItem.vue';
    import { ref } from 'vue';
    import { useRoute, onBeforeRouteUpdate } from 'vue-router';

    const mealService = MealService
    const route = useRoute()

    const tittle = ref("")
    const meals = ref([])

    const loadData = (id) => {
      tittle.value = mealService.getCategoryName(Number(id))
      meals.value = mealService.getMeals(Number(id))
    }
  
    loadData(route.params.categoryId)

    onBeforeRouteUpdate((to) => {
      loadData(to.params.categoryId)
    })
</script>

<template>
    <div class="basic-page">
        <h1 class="meal-tittle"> {{ tittle }}</h1>
        <cafe-list>
            <meal-item v-for="meal in meals" :key="meal.id" :meal="meal"/>
        </cafe-list>   
    </div>
</template>

<style>
    .meal-tittle {
        margin-bottom: 1rem;
    }
</style>