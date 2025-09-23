<script setup>
defineOptions({
  name: "button-empty"
})
</script>

<template>
    <button class="button-empty">
        <slot></slot>
    </button>
</template>

<style>
    .button-empty {
        background: none;   
        border: none;       
        padding: 0;         
        margin: 0;          
        cursor: pointer;
        align-items: center;
        justify-content: center;
    }
</style>