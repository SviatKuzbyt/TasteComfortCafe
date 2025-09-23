<script setup>
    defineProps({categories: Array})
    const emit = defineEmits(["item-click"])

    const clickItem = (id) => {
        emit("item-click", id)
    }
</script>

<template>
    <menu class="menu-items">
        <p 
            class="menu-item" 
            v-for="category in categories" 
            :key="category.id"
            @click="clickItem(category.id)"
        >
            {{ category.name }}
        </p>
    </menu>
</template>

<style>
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
</style>