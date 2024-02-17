<script setup>

    import LZString from 'lz-string'

    import { storeToRefs } from 'pinia'
    import { useGameStore } from '~/store/store.js'
    
    const store = useGameStore()
    
    const { paused } = storeToRefs(store)

    const { pause, resume } = store
    
    const save = function() {
    
        let text = JSON.stringify(store.getSavedData)
        let compressed = LZString.compressToBase64(text)
        localStorage.setItem(store.localStorageName, compressed)

        store.showToast('toastManualSave')
    }
    
</script>

<template>
    <div class="position-absolute bg-light shadow d-flex align-items-center border-top border-dark" style="bottom:0; left:0; right:0; height:46px;">
        <div class="container-fluid" style="max-width:720px;">
            <div class="row gx-2 align-items-center justify-content-end">
                <div class="col-auto text-end">
                    <div class="small lh-1">{{ $t('word_playedTime') }}</div>
                    <div class="small text-white"><bottom-bar-played-time /></div>
                </div>
                <div class="col-auto">
                    <button v-if="paused == false" type="button" class="btn btn-outline-danger" @click="pause();">
                        <font-awesome-icon icon="fa-pause" fixed-width />
                    </button>
                    <button v-if="paused == true" type="button" class="btn btn-outline-primary" @click="resume();">
                        <font-awesome-icon icon="fa-play" fixed-width />
                    </button>
                </div>
                <div class="col-auto">
                    <button type="button" class="btn btn-outline-primary" @click="save();">
                        <font-awesome-icon icon="fa-save" fixed-width />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
