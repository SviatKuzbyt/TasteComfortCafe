<script setup>
    import CafeMenuMobile from './CafeMenuMobile.vue';
    import logo from '@/assets/icons/logo.svg'
    import CafeMenu from './CafeMenu.vue';
    import menuIcon from '@/assets/icons/menu_ic.svg'
    import MealService from '@/services/MealService';
    import { ref, Transition, } from 'vue';
    import { defineMobile } from '@/composables/defineMobile';
    import router from '@/router';

    const mealService = MealService
    
    const categories = mealService.getCategories() 
    const { isMobile } = defineMobile()
    const isMenuOpen = ref(false)

    const changeMenu = () => {
        isMenuOpen.value = !isMenuOpen.value
    }
    const openDealPage = (id) => {
        router.push('/meals/'+id)
        changeMenu()
    }
    const openHomePage = () => {
        router.push('/')
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

        <Transition name="fade">
            <cafe-menu-mobile 
                :categories="categories" 
                @item-click="openDealPage"
                @close-click="changeMenu"
                v-if="isMenuOpen && isMobile"
            ></cafe-menu-mobile>
        </Transition>

    </header>
</template>

<style>
    .cafe-top-bar{
        position: sticky;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1.5rem 10rem;
        align-items: center;
        margin: 0;
        top: 0;
        background-color: white;
    }

    .logo {
        left: 0;
        padding: 0;
        margin: 0;
        height: 2rem;
        cursor: pointer;
    }

    @media(max-width: 1024px){
        .cafe-top-bar {
            padding: 0.5rem 1rem;
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.3s ease;
    }
    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }
</style>