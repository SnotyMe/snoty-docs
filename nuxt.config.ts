import { locales } from "./shared/i18n"

export default defineNuxtConfig({
    extends: ['docus'],
    modules: [
        '@nuxtjs/i18n'
    ],

    i18n: {
        defaultLocale: 'en',
        locales,
    },

    devServer: {
        port: 3005,
    },

    docus: {
        assistant: {
            enabled: false,
        },
    },

    content: {
        build: {
            markdown: {
                highlight: {
                    langs: ["diff", "json", "yaml", "html", "vue", "shell", "batch", "md", "mdc", "liquid"]
                }
            }
        }
    },

    llms: {
        domain: 'https://docs.snoty.me',
    },
})
