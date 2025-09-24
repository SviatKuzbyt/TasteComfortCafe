<script setup>
    defineProps({review: Object})
</script>

<template>
    <div class="item-block">
        <img 
            :src="'/public/images/persons/' + review.avatar" 
            alt="Фотографія відвідувача" 
            class="review-img"
        />
        <div class="item-texts">
            <h4>{{ review.person }}</h4>
            <p class="review-description">{{ review.text }}</p>
        </div>
    </div>
</template>

<style>
    .review-img {
        width: 4.5rem;
        height: 4.5rem;
        border-radius: 4.5rem;
        object-fit: cover;
    }
    .review-description {
        margin-top: 0.25rem;
    }

    @media (max-width: 1024px) {
        .review-img {
            width: 3rem;
            height: 3rem;
            border-radius: 1.5rem;
        } 
        .review-description {
            margin-top: 0.125rem;
        }
    }
</style>