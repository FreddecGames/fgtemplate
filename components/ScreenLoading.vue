<template>
    <div class="h-100 w-100 d-flex align-items-center justify-content-center">
        <div class="container p-3" style="max-width:320px;">
            <div class="card">
                <div class="row g-1">
                    <div class="col-12">
                        <div class="card-header">
                            <div class="row gx-2 align-items-center justify-content-center">
                                <div class="col-auto fs-6"><img src="/logo.png" width="24" height="24" /></div>
                                <div class="col-auto fs-6 text-white">{{ $t('game_title') }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="card-body text-center">
                            <span class="flicker text-primary">{{ $t('screenLoading_text') }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
