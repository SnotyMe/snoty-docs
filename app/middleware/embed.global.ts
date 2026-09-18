export default defineNuxtRouteMiddleware((to) => {
    if (to.query.embed === 'true') {
        useHead({ bodyAttrs: { class: 'embedded' }})
        setPageLayout('docs-embed')
        to.meta.header = false
        to.meta.footer = false
    }
})
