export default defineAppConfig({
    ui: {
        colors: {
            primary: "violet",
            neutral: "neutral",
        },
        pageFeature: {
            slots: {
                root: "p-6 border border-primary/30 hover:border-primary"
            }
        }
    },
    header: {
        logo: {
            light: '/favicon.png',
            dark: '/favicon.png',
            favicon: '/favicon.png',
        },
    },
    navigation: {
        sub: 'header',
    },
})
