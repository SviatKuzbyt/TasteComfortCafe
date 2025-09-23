<template>
    <div class="item-list">
        <slot></slot>
    </div>
</template>

<style>
    .item-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }
    .item-block {
        background-color: #EBF0EC;
        padding: 1.5rem;
        border-radius: 1.5rem;
        display: flex;
        flex-direction: row;
        gap: 1.5rem;
    }
    .item-texts {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 1024px) {
        .item-list {
            grid-template-columns: 1fr;
            gap: 1rem;
        }
        .item-block {
            padding: 1rem;
            gap: 1.rem;
        }
    }
</style>