import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        glossary: defineCollection({
            type: 'page',
            source: 'glossary/**',
        }),
        nodes: defineCollection({
            type: 'data',
            source: 'nodes/**.json',
            schema: z.object({
                descriptor: z.object({
                    name: z.string(),
                }),
                metadata: z.object({
                    displayName: z.string(),
                    icon: z.object({
                        name: z.string(),
                        color: z.string().nullable(),
                    }).nullable(),
                })
            })
        }),
    }
})
