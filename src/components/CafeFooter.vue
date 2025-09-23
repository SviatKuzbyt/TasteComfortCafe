<script setup>
    import locationIcon from '@/assets/icons/location_ic.svg'
    import phoneIcon from '@/assets/icons/phone_ic.svg'
    import instagramIcon from '@/assets/icons/link_inst.svg'
    import facebookIcon from '@/assets/icons/link_fb.svg'
    import telegramIcon from '@/assets/icons/link_tg.svg'
    import { ref } from 'vue'

    const networks = ref([
        {icon: instagramIcon, alt: "Instagram", link: "https://example.com" },
        {icon: facebookIcon, alt: "Facebook", link: "https://example.com" },
        {icon: telegramIcon, alt: "Telegram", link: "https://example.com" }
    ])
    
    const openLink = (url) => {
        window.open(url, '_blank')
    }
</script>

<template>
    <footer class="footer-back">
        
        <h4 class="white-text tittle-margin">Контакти</h4>
        <text-icon
            :icon="locationIcon"
            :text="'м. Львів, вул. Площа Ринок 32А'"
            class="contact-text"
        ></text-icon>
        <text-icon
            :icon="phoneIcon"
            :text="'+ 380 096 874 34 43'"
            class="contact-text"
        ></text-icon>

        <div class="networks-div">
            <button-empty v-for="network in networks">
                <img 
                    :src="network.icon" 
                    :alt="network.alt"
                    @click="openLink(network.link)"
                    />
            </button-empty>
        </div>

        <p class="gray-text">Розроблено Святославом Кузбитом. Вересень 2025</p>
    </footer>
</template>

<style>
    .footer-back{
        background-color: #386641;
        padding: 2rem 10rem;
        display: flex;
        flex-direction: column;
    }
    
    .white-text {
        color: white;
    }

    .tittle-margin {
        margin-bottom: 0.5rem;
    }

    .contact-text {
        color: white;
        margin-bottom: 1rem;
    }

    .networks-div{
        display: flex;
        flex-direction: row;
        margin-top: 1rem;
        margin-bottom: 2rem;
        gap: 1rem;
    }

    .gray-text {
        color: #9BB3A0;
    }

    @media(max-width: 1024px){
        .footer-back {
            padding: 1.5rem 1rem;
        }
    }
</style>