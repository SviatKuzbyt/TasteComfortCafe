<script setup>
defineOptions({
  name: "text-icon"
})
defineProps({icon: Image, text: String})
</script>

<template>
    <div class="icon-text">
        <img :src="icon" class="icon-text-icon"></img>
        <p class="icon-text-text"> {{ text }} </p>
    </div>
</template>

<style>
    .icon-text {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
    }

    .icon-text-text {
        color: var(--color);
        font-weight: var(--font-weight);
    }
</style>