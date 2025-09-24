<template>
    <TransitionGroup name="list" tag="div" class="item-list" ьщ>
        <slot></slot>
    </TransitionGroup>
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
    
    .list-enter-active, .list-leave-active {
        transition: all 0.5s ease;
    }
    .list-enter-from {
        opacity: 0;
        transform: translateY(10px);
    }
    .list-leave-to {
        opacity: 0;
        transform: translateY(-10px);
    }
    .list-move {
        transition: transform 0.5s ease;
    }
    .list-leave-active {
        position: absolute;
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