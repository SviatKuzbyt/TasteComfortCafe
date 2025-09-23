<script setup>
    import CafeMenuMobile from './CafeMenuMobile.vue';
    import logo from '@/assets/icons/logo.svg'
    import CafeMenu from './CafeMenu.vue';
    import menuIcon from '@/assets/icons/menu_ic.svg'
    import MealService from '@/services/MealService';
    import { ref, } from 'vue';
    import { defineMobile } from '@/composables/defineMobile';

    const mealService = MealService
    
    const categories = mealService.getCategories() 
    const { isMobile } = defineMobile()
    const isMenuOpen = ref(false)

    const changeMenu = () => {
        isMenuOpen.value = !isMenuOpen.value
    }
    const openDealPage = (id) => {
        console.log("SKLT", id);
    }
    const openHomePage = () => {

    }
</script>

<template>
    
    <header class="cafe-top-bar">
        <img :src="logo" alt="логотип" class="logo" @click="openHomePage"/>

        <button-empty @click="changeMenu" v-if="isMobile">
            <img :src="menuIcon" alt="відкрити меню"/>
        </button-empty>

        <cafe-menu 
            :categories="categories" 
            @item-click="openDealPage"
            v-else
        ></cafe-menu>

        <cafe-menu-mobile 
            :categories="categories" 
            @item-click="openDealPage"
            @close-click="changeMenu"
            v-if="isMenuOpen && isMobile"
        ></cafe-menu-mobile>
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

    @media(max-width: 1024px){
        .cafe-top-bar {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }
    }
</style>