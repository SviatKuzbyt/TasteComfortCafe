<script setup>
    import SearchIcon from '@/assets/icons/ic_search.svg'

    defineProps({modelValue: String})
    const emit = defineEmits(["update:modelValue"])

    const onInput = (e) => {
        emit("update:modelValue", e.target.value)
    }
</script>

<template>
    <div class="field-search">
        <img :src="SearchIcon" class="field-search-icon"/>
        <input 
            :value="modelValue"
            @input="onInput"
            name="search"
            class="field-search-text"
            placeholder="Пошук..."
        />
    </div>
</template>

<style>
    .field-search{
        width: 30%;
        background-color: #EBF0EC;
        border-radius: 1.5rem;
        height: 3rem;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .field-search-icon{
        height: 1rem;
        padding: 0 1.25rem; 
    }

    .field-search-text{
        background: none;
        flex: 1;
        border: none;
        outline: none;
        box-shadow: none;
        appearance: none; 
        margin: 0;
        -webkit-appearance: none; 
        -moz-appearance: none; 
        font-family: 'Roboto', serif;
        font-weight: 400;
        font-size: 1.125rem;
        color: #060A06;
        padding-right: 1.5rem;
    }

    @media (max-width: 1024px) {
        .field-search {
            width: 100%;
        }
    }
</style>