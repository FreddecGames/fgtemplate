<script setup>

    import { storeToRefs } from 'pinia'
    import { useGameStore } from '~/store/store.js'
    
    const store = useGameStore()
    
    const { getLocalData } = storeToRefs(store)
    
    const { exportSave, downloadSave, showModal } = store
    
</script>

<template>
    <div class="h-100 w-100 d-flex align-items-center justify-content-center">
        <div class="container p-3" style="max-width:512px;">
            <div class="card">
                <div class="row g-1">
                    <div class="col-12">
                        <div class="card-header">
                            <div class="row gx-2 align-items-center justify-content-center">
                                <div class="col-auto">
                                    <img src="/logo.png" width="24" height="24" />
                                </div>
                                <div class="col-auto text-truncate">
                                    <span class="fs-6 text-white">{{ $t('game_title') }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="card-body">
                            <div class="row g-2 justify-content-center">
                                <div class="col-12 text-danger text-center">{{ $t('screenError_text') }}</div>
                                <div class="col-12 text-center small">
                                    <span class="text-normal">{{ $t('screenError_info1') }}</span>
                                </div>
                                <div class="col-5 col-lg-3">
                                    <a href="https://discord.gg/ZXrggavUpv" target="_blank" class="w-100 btn btn-outline-primary">
                                        <span><font-awesome-icon icon="fa-brands fa-fw fa-discord" /></span>
                                        <span class="ms-2">Discord</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="card-body">
                            <div class="row g-2 justify-content-center">
                                <div class="col-12">
                                    <textarea spellcheck="false" rows="3" class="form-control" disabled readonly>{{ getLocalData }}</textarea>
                                </div>
                                <div class="col-5 col-lg-3">
                                    <button type="button" class="w-100 btn btn-outline-primary" @click="exportSave()">
                                        <font-awesome-icon icon="fas fa-fw fa-copy" />
                                        <span class="ms-2">{{ $t('screenError_exportSave') }}</span>
                                    </button>
                                </div>
                                <div class="col-5 col-lg-3">
                                    <button type="button" class="w-100 btn btn btn-outline-primary" @click="downloadSave()">
                                        <font-awesome-icon icon="fas fa-fw fa-download" />
                                        <span class="ms-2">{{ $t('screenError_downloadSave') }}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="card-body">
                            <div class="row g-2 justify-content-center">
                                <div class="col-12 text-center small">
                                    <span class="text-normal">{{ $t('screenError_info2') }}</span>
                                </div>
                                <div class="col-5 col-lg-3">
                                    <button type="button" class="w-100 btn btn-outline-danger" @click="showModal('modalWipe')">
                                        <font-awesome-icon icon="fas fa-fw fa-skull" />
                                        <span class="ms-2">{{ $t('screenError_wipeSave') }}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div id="toast-container" class="toast-container position-fixed bottom-0 end-0 p-3">
        <toast-export />
    </div>
    
    <modal-wipe />
</template>
