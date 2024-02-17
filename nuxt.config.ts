export default defineNuxtConfig({
    
    ssr: false,
    
    devtools: false,
    
    app: {
        head: {
            title: 'FG Template',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [{ rel: 'icon', type: 'image/png', href: '/logo.png' }],
        }
    },
    
    css: [ 'bootstrap/dist/css/bootstrap.min.css', '@fortawesome/fontawesome-svg-core/styles.css', '~/assets/styles.css' ],
    
    modules: [ '@pinia/nuxt', '@nuxtjs/i18n', ],
    
    i18n: {
        lazy: true,
        legacy: false,
        langDir: 'locales',
        defaultLocale: 'en',
        detectBrowserLanguage: {            
            useCookie: true,
            redirectOn: 'root',
            fallbackLocale: 'en',
        },
        locales: [
            { code:'en', file:'en.json',  },
            { code:'fr', file:'fr.json',  },
        ],
    },
})
