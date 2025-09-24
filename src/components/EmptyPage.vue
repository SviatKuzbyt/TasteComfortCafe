<script setup>
    defineProps({image: Image, text: String})
</script>

<template>
    <div class="empty-block" >
        <img :src="image" alt="Декоративне зображення" class="empty-img"/>
        <p class="empty-text">{{ text }}</p>
    </div>
</template>

<style>
    .empty-block {
        display: flex;
        flex-direction: column;
        flex: 0.5;
        justify-content: center;
        width: 100%;
        align-items: center;
    }

    .empty-img {
        height: 6rem;
        width: auto;
        margin-bottom: 0.5rem;
    }

    .empty-text {
        color: #797D79;
        text-align: center;
        font-weight: 500;
    }
</style>