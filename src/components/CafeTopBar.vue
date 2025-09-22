<script setup>
    import logo from '@/assets/icons/logo.svg'
    import MealService from '@/services/MealService';
    const mealService = MealService
    const categories = mealService.getCategories() 
</script>

<template>
    <header class="cafe-top-bar">
        <img :src="logo" alt="logo" class="logo"/>
        <menu class="menu-items">
            <p class="menu-item" v-for="category in categories" :key="category.id">{{ category.name }}</p>
        </menu>
    </header>

</template>

<style>
    .cafe-top-bar{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 1rem;
        padding-bottom: 1rem;
        align-items: center;
        margin: 0;
    }

    .logo {
        left: 0;
        padding: 0;
        margin: 0;
        height: 2rem;
    }

    .menu-items {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .menu-item {
        margin-left: 4rem;
    }
</style>