<script setup>
    import logo from '@/assets/icons/logo.svg'
    import menuIcon from '@/assets/icons/menu_ic.svg'
    import MealService from '@/services/MealService';
    import { ref } from 'vue';

    const mealService = MealService
    const categories = mealService.getCategories() 

    const isMenuOpen = ref(false)
    const changeMenu = () => {
        isMenuOpen.value = !isMenuOpen.value
    }
</script>

<template>
    
    <header class="cafe-top-bar">
        <img :src="logo" alt="логотип" class="logo"/>

        <button class="menu-button" @click="changeMenu">
            <img :src="menuIcon" alt="відкрити меню"/>
        </button>

        <div v-if="isMenuOpen" class="menu-back" @click="changeMenu"></div>
        <menu :class="['menu-items', {'show-menu': isMenuOpen}]">
            <h2 v-if="isMenuOpen" class="menu-tittle">Меню</h2>
            <p class="menu-item" v-for="category in categories" :key="category.id">{{ category.name }}</p>
        </menu>
    </header>

</template>

<style>
    .cafe-top-bar{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
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
        cursor: pointer;
    }

    .menu-button {
        background: none;   
        border: none;       
        padding: 0;         
        margin: 0;          
        cursor: pointer;    
        display: none; 
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 768px) {
        .menu-button {
            display: inline-flex;
        }
        .menu-items {
            display: none;
            flex-direction: column;
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 60%;
            background-color: white;
            padding: 1rem;
            align-items: start;
        }
        .menu-item {
            margin-left: 0rem;
            min-height: 3rem;
            cursor: pointer;
            display: flex;
            width: 100%;
            align-items: center;
        }
        .menu-item::after {
          content: url('/src/assets/icons/more_ic.svg');
          position: absolute;
          right: 1rem;
        }
        .show-menu {
            display: flex;
        }
        .menu-back {
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            position:fixed;
            display: flex;
            background-color: rgb(0, 0, 0, 0.5);
        }

        .menu-tittle {
            padding-bottom: 0.2em;
        }

        .cafe-top-bar{
            padding-top: 1rem;
            padding-bottom: 1rem;
        }
    }
</style>