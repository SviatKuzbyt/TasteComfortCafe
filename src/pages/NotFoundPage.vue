<script setup>
    import EmptyPage from '@/components/EmptyPage.vue';
    import ErrorIcon from '@/assets/icons/error_ic.svg'
</script>

<template>
    <div class="basic-page">
        <empty-page :image="ErrorIcon" text="Сторінку не знайдено :("/>
    </div>
</template>