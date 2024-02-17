<script setup>

    import { storeToRefs } from 'pinia'
    import { useGameStore } from '~/store/store.js'
    
    const store = useGameStore()
    
    const { activePageId } = storeToRefs(store)
    
    const tabs = [
    
        { id:'first', label:'page_first', icon:'fas fa-boxes', },
        { id:'second', label:'page_second', icon:'fas fa-building', },
    ]
    
</script>

<template>
    <div class="h-100 container pt-3 px-2" style="max-width:720px;">
        <div class="h-100 row gy-3 flex-column">
            <div class="col-auto">
                <div class="card">
                    <div class="card-header px-0">
                        <div class="nav nav-pills flex-nowrap">
                            <div v-for="tab in tabs" :key="tab.id" class="col-auto nav-item">
                                <page-tab-first v-if="tab.id === 'first'" :tab="tab" />
                                <page-tab-second v-else-if="tab.id === 'second'" :tab="tab" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col scrollbar">
                <page-first v-if="activePageId === 'first'" />
                <page-second v-else-if="activePageId === 'second'" />
            </div>
        </div>
    </div>
</template>
