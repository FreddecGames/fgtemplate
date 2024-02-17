<script setup>

    import { storeToRefs } from 'pinia'
    import { useGameStore } from '~/store/store.js'
    
    const store = useGameStore()
    
    const { showLocked, getLocalData } = storeToRefs(store)
    
    const { exportSave, downloadSave, importSave, showModal } = store
    
    const { locale, locales, setLocale } = useI18n()

    const changeLocale = function(code) {
    
        setLocale(code)
        store.locale = code
    }
    
</script>

<template>
    <div class="container px-2 py-3" style="max-width:720px;">
        <div class="row gx-2 gy-3">
            <div class="col-12">
                <div class="card">
                    <div class="row gy-3 gx-0">
                        <div class="col-12">
                            <div class="row g-1">
                                <div class="col-12">
                                    <div class="card-header">
                                        <span class="fs-6 text-white">{{ $t('tabOptions_about') }}</span>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="card-body">
                                        <div class="row g-2">
                                            <div class="col-12 small px-2">{{ $t('tabOptions_love') }}</div>
                                            <div class="col-12 small px-2">{{ $t('tabOptions_iconsBy') }} <a href="https://fontawesome.com/" target="_blank">Fontawesome</a>, <a href="https://www.flaticon.com/" target="_blank">Flaticon</a>, <a href="https://icones8.fr/" target="_blank">Icones8</a></div>
                                            <div class="col">
                                                <a href="https://www.patreon.com/bePatron?u=61283131" class="w-100 btn btn-light" target="_blank">
                                                    <img src="/patreon.png" width="18" height="18" />
                                                    <span class="ms-2 d-none d-sm-inline">{{ $t('tabOptions_patreon') }}</span>
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a href="https://ko-fi.com/freddecgames" class="w-100 btn btn-light" target="_blank">
                                                    <img src="/kofi.png" width="18" height="18" />
                                                    <span class="ms-2 d-none d-sm-inline">{{ $t('tabOptions_kofi') }}</span>
                                                </a>
                                            </div>
                                            <form class="col" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                                                <input type="hidden" name="cmd" value="_s-xclick">
                                                <input type="hidden" name="hosted_button_id" value="7XYD7SJFKQ8M4">
                                                <button type="submit" class="w-100 btn btn-light">
                                                    <img src="/paypal.png" width="18" height="18" />
                                                    <span class="ms-2 d-none d-sm-inline">{{ $t('tabOptions_paypal') }}</span>
                                                </button>
                                            </form>
                                            <div class="col">
                                                <a href="https://discord.gg/ZXrggavUpv" class="w-100 btn btn-light" target="_blank">
                                                    <img src="/discord.png" width="18" height="18" />
                                                    <span class="ms-2 d-none d-sm-inline">{{ $t('tabOptions_discord') }}</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="row g-1">
                                <div class="col-12">
                                    <div class="card-header">
                                        <span class="fs-6 text-white">{{ $t('tabOptions_language') }}</span>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="card-body">
                                        <div class="row g-2">
                                            <div v-for="l in locales" :key="l.code" class="col-auto">
                                                <button type="button" class="btn btn-light" :class="{ 'border-primary': locale == l.code }" @click="changeLocale(l.code)">
                                                    <img :src="'/languages/' + l.code + '.png'" height="24">
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="row g-1">
                                <div class="col-12">
                                    <div class="card-header">
                                        <span class="fs-6 text-white">{{ $t('tabOptions_localData') }}</span>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="row g-1">
                                        <div class="col-12 col-md-6">
                                            <div class="card-body">
                                            <div class="row g-2">
                                                <div class="col-12">
                                                    <textarea id="localData" spellcheck="false" rows="3" class="w-100 form-control" disabled readonly>{{ getLocalData }}</textarea>
                                                </div>
                                                <div class="col-4">
                                                    <button type="button" class="w-100 btn btn-outline-danger" @click="showModal('modalWipe');">
                                                        <span><font-awesome-icon icon="fas fa-fw fa-skull" /></span>
                                                        <span class="ms-2">{{ $t('tabOptions_wipeSave') }}</span>
                                                    </button>
                                                </div>
                                                <div class="col-4">
                                                    <button type="button" class="w-100 btn btn-outline-primary" @click="exportSave();">
                                                        <span><font-awesome-icon icon="fas fa-fw fa-copy" /></span>
                                                        <span class="ms-2">{{ $t('tabOptions_exportSave') }}</span>
                                                    </button>
                                                </div>
                                                <div class="col-4">
                                                    <button type="button" class="w-100 btn btn-outline-primary px-0" @click="downloadSave();">
                                                        <span><font-awesome-icon icon="fas fa-fw fa-download" /></span>
                                                        <span class="ms-2">{{ $t('tabOptions_downloadSave') }}</span>
                                                    </button>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="card-body">
                                            <div class="row g-2">
                                                <div class="col-12">
                                                    <textarea spellcheck="false" rows="3" id="importData" class="w-100 form-control"></textarea>
                                                </div>
                                                <div class="col-4 ms-auto">
                                                    <button type="button" class="w-100 btn btn-outline-primary" @click="importSave();">
                                                        <span><font-awesome-icon icon="fas fa-fw fa-upload" /></span>
                                                        <span class="ms-2">{{ $t('tabOptions_importSave') }}</span>
                                                    </button>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
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
        <toast-import-empty />
        <toast-import-corrupted />
    </div>
    
    <modal-wipe />
</template>
