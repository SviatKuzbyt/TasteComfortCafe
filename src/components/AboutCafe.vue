<script setup>
    import locationIcon from '@/assets/icons/location_black_ic.svg'
</script>

<template>
    <div class="about-block">
        <div class="about-text-block">
            <h1>Смак і Затишок</h1>
            <p class="about-text">Сучасне кафе в центрі міста. Тут на вас чекають українські та європейські страви зі свіжих продуктів, ароматна кава й десерти власного приготування. Затишна атмосфера, стильний інтер’єр та привітний персонал зроблять ваш відпочинок особливим.</p>
            <text-icon
                :icon="locationIcon"
                :text="'м. Львів, вул. Площа Ринок 32А'"
                class="about-address"
            ></text-icon>
        </div>
        <img src="/public/images/about.jpg" class="about-image"/>
    </div>
</template>

<style>
    .about-block{
        background-color: #EBF0EC;
        padding: 1.5rem 10rem;
        display: flex;
        flex-direction: row;
        gap: 8rem;
    }

    .about-text-block {
        display: flex;
        flex-direction: column;
    }

    .about-text {
        margin-top: 0.5rem;
        margin-bottom: 2rem;
    }

    .about-address {
        color: #060A06;
        font-weight: 700;
    }

    .about-image {
        width: 40%;
        border-radius: 1.5rem;
        height: fit-content;
    }

    
    @media(max-width: 1024px){
        .about-block{
            padding: 1rem;
            flex-direction: column;
            gap: 1rem;
        }
        .about-text-block {
            display: flex;
            flex-direction: column;
            order: 2;
        }
        .about-image {
            width: 100%;
            order: 1;
        }
    }
</style>