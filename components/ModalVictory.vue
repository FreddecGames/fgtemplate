<script setup>

    import { storeToRefs } from 'pinia'
    import { useGameStore } from '~/store/store.js'
    
    const store = useGameStore()
    
</script>

<template>
    <div id="modalVictory" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="row g-1">
                    <div class="col-12">
                        <div class="modal-header">
                            <span class="fs-6 text-white">{{ $t('modalVictory_title') }}</span>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"><font-awesome-icon icon="fas fa-fw fa-times" /></button>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="modal-body">
                            <div class="row g-2">
                                <div class="col-12 text-center small">
                                    <span class="fs-6 text-white">{{ $t('modalVictory_subTitle') }}</span>
                                </div>
                                <div class="col-12 text-center small">
                                    <span class="text-normal">{{ $t('modalVictory_text') }}</span>
                                </div>
                                <div class="col-12 text-center">
                                    <img src="/victory.png" width="32" height="32" />
                                </div>
                                <div class="col-12 mt-3">
                                    <div class="row justify-content-center">
                                        <div class="col-5 col-lg-3">
                                            <button type="button" class="w-100 btn btn-outline-primary" data-bs-dismiss="modal">
                                                {{ $t('modalVictory_close') }}
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
</template>