<script setup>

    import { storeToRefs } from 'pinia'
    import { useGameStore } from '~/store/store.js'
    
    const store = useGameStore()
    
    const { activeTabId } = storeToRefs(store)
    
    const { selectTab } = store
    
</script>

<template>
    <div class="position-absolute bg-light d-flex align-items-center shadow border-bottom border-dark" style="top:0; width:100%; height:46px;">
        <div class="container-fluid" style="max-width:720px;">
            <div class="row gx-2 align-items-center">
                <div class="col-auto">
                    <img src="/logo.png" width="24" height="24" />
                </div>
                <div class="col text-truncate">
                    <span class="fs-6 text-white">{{ $t('game_title') }}</span>
                </div>
                <div class="col-auto">
                    <div class="dropdown-center">
                        <button type="button" class="btn btn-outline-danger" data-bs-toggle="dropdown" aria-expanded="false">
                            <font-awesome-icon icon="fas fa-exclamation-triangle" fixed-width />
                            <span class="d-none d-lg-inline ms-1">v 0.01</span>
                        </button>
                        <div class="dropdown-menu">
                            <div class="rounded bg-dark p-1 small text-center" style="width:15rem;">
                                <span class="text-danger">v 0.01 - {{ $t('screenGame_disclaimer') }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-auto">
                    <button type="button" class="btn" :class="{ 'btn-primary':activeTabId == 'game', 'btn-outline-primary':activeTabId != 'game' }" @click="selectTab('game')">
                        <font-awesome-icon icon="fas fa-gamepad" fixed-width />
                        <span class="d-none d-lg-inline ms-1">{{ $t('screenGame_tabGame') }}</span>
                    </button>
                </div>
                <div class="col-auto">
                    <button type="button" class="btn" :class="{ 'btn-primary':activeTabId == 'options', 'btn-outline-primary':activeTabId != 'options' }" @click="selectTab('options')">
                        <font-awesome-icon icon="fas fa-cog" fixed-width />
                        <span class="d-none d-lg-inline ms-1">{{ $t('screenGame_tabOptions') }}</span>
                    </button>
                </div>
            </div>
        </div>
        
    </div>
</template>