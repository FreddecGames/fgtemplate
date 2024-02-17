<script setup>

    import { storeToRefs } from 'pinia'
    import { useGameStore } from '~/store/store.js'
    
    const store = useGameStore()
    
</script>

<template>
    <div class="row g-3">
        <div class="col-12">
            <div class="card">
                <div class="row g-1">
                    <div class="col-12">
                        <div class="card-header">
                            <span class="fs-6 text-white">{{ $t('undefined') }}</span>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="card-body">
                            <span>{{ $t('undefined') }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
