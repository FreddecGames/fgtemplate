<script setup>

    import { storeToRefs } from 'pinia'
    import { useGameStore } from '~/store/store.js'
    
    const store = useGameStore()
    
    const { activeTabId } = storeToRefs(store)
    
</script>

<template>

    <top-bar />
    
    <div class="position-absolute w-100 scrollbar" style="top:46px; bottom:46px;">
        
        <tab-game v-if="activeTabId == 'game'" />
        <tab-options v-else-if="activeTabId == 'options'" />
        
    </div>

    <bottom-bar />
    
    <div id="toast-container" class="toast-container position-fixed bottom-0 end-0 p-3">
        <toast-manual-save />
    </div>
    
    <modal-offline />
    <modal-victory />
    
</template>
