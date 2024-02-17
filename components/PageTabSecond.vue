<script setup>
    
    const props = defineProps([ 'tab' ])

    import { storeToRefs } from 'pinia'
    import { useGameStore } from '~/store/store.js'
    
    const store = useGameStore()
    
    const { activePageId } = storeToRefs(store)
    
    const { selectPage } = store
    
</script>

<template>
    <button type="button" class="w-100 nav-link" :class="{ 'active':activePageId == tab.id }" @click="selectPage(tab.id)">
        <div class="row gx-2 align-items-center justify-content-center">
            <div class="col-auto"><font-awesome-icon :icon="tab.icon" fixed-width /></div>
            <div class="col-auto d-none d-lg-inline">{{ $t(tab.label) }}</div>
        </div>
    </button>
</template>
