export default defineNuxtPlugin(() => {
    if (!useRuntimeConfig().public.embed) return

    useRouter().beforeResolve((to) => {
        useHead({ bodyAttrs: { class: 'embedded' }})
        to.meta.header = false
        to.meta.footer = false
        to.meta.layout = "docs-embed"
    })
})
