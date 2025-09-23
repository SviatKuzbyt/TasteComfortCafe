<script setup>
    defineProps({categories: Array})
    const emit = defineEmits(["item-click", "close-click"])

    const clickItem = (id) => {
        emit("item-click", id)
    }

    const clickClose = () => {
        emit("close-click")
    }
</script>

<template>
    <div class="menu-back" @click="clickClose"></div>
    <menu class="menu-items-mobile">
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
</template>

<style>
    .menu-items-mobile {
        flex-direction: column;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        margin: 0;
        width: 60%;
        background-color: white;
        padding: 1rem;
        align-items: start;
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
    }
    .menu-tittle {
        padding-bottom: 0.2em;
    }
</style>