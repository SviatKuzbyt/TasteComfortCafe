<script setup>
    defineProps({categories: Array, show: Boolean})
    const emit = defineEmits(["item-click", "close-click"])

    const clickItem = (id) => {
        emit("item-click", id)
    }
    const clickClose = () => {
        emit("close-click")
    }
</script>

<template>
    <Transition name="fade">
        <div class="menu-back" @click="clickClose" v-if="show"></div>
    </Transition>
    <Transition name="slide">
        <menu class="menu-items-mobile" @click.stop v-if="show">
            <h1 class="menu-tittle">Меню</h1>
            <p 
                class="menu-item-mobile" 
                v-for="category in categories" 
                :key="category.id"
                @click="clickItem(category.id)"
            >
                {{ category.name }}
            </p>
    </menu>
    </Transition>

</template>

<style>
    .menu-items-mobile {
        flex-direction: column;
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        margin: 0;
        width: 60%;
        background-color: white;
        padding: 1rem;
        align-items: start;
        z-index: 3;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.3s ease;
    }
    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }

    .menu-item-mobile {
        margin-left: 0rem;
        min-height: 3rem;
        cursor: pointer;
        display: flex;
        width: 100%;
        align-items: center;
    }
    .menu-item-mobile::after {
      content: url('/src/assets/icons/more_ic.svg');
      position: absolute;
      right: 1rem;
    }

    .menu-back {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        position:fixed;
        display: flex;
        background-color: rgb(0, 0, 0, 0.5);
        z-index: 2;
    }

    .menu-tittle {
        padding-bottom: 0.2em;
    }

    .slide-enter-active, .slide-leave-active {
        transition: transform 0.3s ease;
    }
    .slide-enter-from, .slide-leave-to {
        transform: translateX(100%);
    }
</style>