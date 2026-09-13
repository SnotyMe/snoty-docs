export default defineNuxtConfig({
    extends: ['docus'],
    modules: [
        '@nuxtjs/i18n'
    ],

    i18n: {
        defaultLocale: 'en',
        locales: [
            {
                code: 'en',
                name: 'English',
            },
        ],
    },

    devServer: {
        port: 3005,
    },

    docus: {
        assistant: {
            enabled: false,
        },
    },

    llms: {
        domain: 'https://docs.snoty.me',
    },
})
