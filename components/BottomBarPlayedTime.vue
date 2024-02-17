<script setup>
    
    import { storeToRefs } from 'pinia'
    import { useGameStore, formatTime } from '~/store/store.js'
    
    const store = useGameStore()
    
    const { playedTime } = storeToRefs(store)
    
    const value = computed(() => formatTime(playedTime.value))
    
</script>

<template>
    <span>{{ value }}</span>
</template>
