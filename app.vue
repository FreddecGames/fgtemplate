<script setup>
    
    import '~/data/data.js'

    import LZString from 'lz-string'

    import { storeToRefs } from 'pinia'
    import { useGameStore, formatTime } from '~/store/store.js'
    
    const store = useGameStore()
    
    const switchLocalePath = useSwitchLocalePath()
    
    var fps = 60
    var lastFrameTimeMs = Date.now()
    
    const errorOccured = ref(false)
    const gameLoaded = ref(false)
    
    var mainInterval = null
    var autoSaveInterval = null
    
    setTimeout(() => {
    
        try {
            
            let loadedData = localStorage.getItem(store.localStorageName)
            if (loadedData && loadedData !== null && loadedData.length % 4 == 0) {
                
                let text = LZString.decompressFromBase64(loadedData)
                if (!text) throw 'Local data corrupted'
                loadedData = JSON.parse(text)
                
                if (loadedData.lastFrameTimeMs != null) lastFrameTimeMs = loadedData.lastFrameTimeMs
                
                store.load(loadedData)
                
                switchLocalePath(store.locale)
            }
            else {
            
                store.startNewGame()
            }
            
            mainInterval = setInterval(() => { mainLoop() }, 1000 / fps)
            autoSaveInterval = setInterval(() => { autoSave() }, 30000)

            window.onbeforeunload = function() {
            
                if (!store.resetInProgress) autoSave()
                
                if (mainInterval) clearInterval(mainInterval)
                if (autoSaveInterval) clearInterval(autoSaveInterval)
            }
            
            gameLoaded.value = true
        }
        catch (error) {
                    
            errorOccured.value = true

            console.error(error)
        }
    }, 2000)
    
    function mainLoop() {
    
        let currentTimeMs = Date.now()
        let deltaMs = currentTimeMs - lastFrameTimeMs
        
        lastFrameTimeMs = currentTimeMs

        if (store.paused) return            
        
        let seconds = deltaMs / 1000
        store.playedTime += seconds
        
        if (!store.offlineModal && deltaMs > 15 * 60 * 1000) {

            let node = document.getElementById('offlineTime')
            node.innerHTML = formatTime(deltaMs / 1000)
            
            store.offlineModal = true
            store.showModal('modalOffline')
        }
        
        if (store.isVictoryReached) {
        
            store.victory = true            
            store.showModal('modalVictory')
        }
    }

    function autoSave() {
        
        let text = JSON.stringify(store.getSavedData)
        let compressed = LZString.compressToBase64(text)
        localStorage.setItem(store.localStorageName, compressed)
    }
    
</script>

<template>
    <screen-loading v-if="errorOccured === false && gameLoaded === false" />
    <screen-error v-else-if="errorOccured === true" />
    <screen-game v-else />
</template>
