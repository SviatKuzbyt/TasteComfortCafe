<script setup>
    import MealService from '@/services/MealService';
    import CafeList from '@/components/list/CafeList.vue';
    import MealItem from '@/components/list/MealItem.vue';
    import FieldSearch from '@/components/FieldSearch.vue';
    import { ref } from 'vue';
    import { useRoute, onBeforeRouteUpdate } from 'vue-router';

    const mealService = MealService
    const route = useRoute()

    const tittle = ref("")
    const meals = ref([])
    const searchText = ref("")

    const loadData = (id) => {
      tittle.value = mealService.getCategoryName(Number(id))
      meals.value = mealService.getMeals(Number(id))
      searchText.value = ""
    }
  
    loadData(route.params.categoryId)

    onBeforeRouteUpdate((to) => {
      loadData(to.params.categoryId)
    })
</script>

<template>
    <div class="basic-page">
        <div class="meal-tittle">
            <h1>{{ tittle }}</h1>
            <field-search v-model="searchText"/>
        </div>
        
        <cafe-list>
            <meal-item v-for="meal in meals" :key="meal.id" :meal="meal"/>
        </cafe-list>   
    </div>
</template>

<style>
    .meal-tittle {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 1rem;
        gap: 1rem;
    }
    
    @media (max-width: 1024px){
        .meal-tittle {
            flex-direction: column;
        }
    }
</style>