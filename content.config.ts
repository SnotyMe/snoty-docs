import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        glossary: defineCollection({
            type: 'page',
            source: 'glossary/**',
        })
    }
})
