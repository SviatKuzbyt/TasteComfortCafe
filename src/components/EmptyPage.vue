<script setup>
    defineProps({image: Image, text: String})
</script>

<template>
    <div class="empty-block" >
        <img :src="image" alt="Декоративне зображення" class="empty-img"/>
        <h3 class="empty-text">{{ text }}</h3>
    </div>
</template>

<style>
    .empty-block {
        position: static;
        display: flex;
        flex-direction: column;
        flex: 0.5;
        justify-content: center;
        width: 100%;
        align-items: center;
    }

    .empty-img {
        height: 8rem;
        width: auto;
        margin-bottom: 1rem;
    }

    .empty-text {
        color: #797D79;
        text-align: center;
        font-weight: 500;
    }
</style>