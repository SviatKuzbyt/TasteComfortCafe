<script setup>
    import MealService from '@/services/MealService';
    import CafeList from '@/components/list/CafeList.vue';
    import MealItem from '@/components/list/MealItem.vue';
    import FieldSearch from '@/components/FieldSearch.vue';
    import EmptyPage from '@/components/EmptyPage.vue';
    import EmpyIcon from '@/assets/icons/empty_ic.svg'
    import { computed, ref } from 'vue';
    import { useRoute, onBeforeRouteUpdate } from 'vue-router';

    const mealService = MealService
    const route = useRoute()

    const tittle = ref("")
    const meals = ref([])
    const searchText = ref("")

    const filteredMeals = computed(() => {
        if (!searchText.value) return meals.value
        return meals.value.filter(meal =>
            meal.name.toLowerCase().includes(searchText.value.toLowerCase()) ||
            meal.description.toLowerCase().includes(searchText.value.toLowerCase())
        )
    })

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

        <Transition name="fade" mode="out-in">
            <empty-page 
                v-if="filteredMeals.length === 0"
                :image="EmpyIcon" 
                text="Незнайдено страв" 
            />

            <cafe-list v-else>
                <meal-item v-for="meal in filteredMeals" :key="meal.id" :meal="meal"/>
            </cafe-list> 
        </Transition>  
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

    /* Animations */
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s ease;
    }

    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }
    
    @media (max-width: 1024px){
        .meal-tittle {
            flex-direction: column;
        }
    }
</style>