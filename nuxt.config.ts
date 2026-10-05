import { locales } from "./shared/i18n"

const isEmbedBuild = process.env.DOCS_EMBED == 'true'

export default defineNuxtConfig({
    extends: ['docus'],
    modules: [
        '@nuxtjs/i18n'
    ],

    i18n: {
        defaultLocale: 'en',
        locales,
    },

    app: {
        baseURL: isEmbedBuild ? '/embed' : '/',
    },

    runtimeConfig: {
        public: {
            embed: isEmbedBuild,
        },
    },

    robots: {
        robotsTxt: !isEmbedBuild,
        disallow: ['/embed'],
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

    routeRules: {
        "/sitemap-nodes": {
            prerender: true,
        },
    },
})
