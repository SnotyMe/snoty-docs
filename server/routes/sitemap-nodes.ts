import { locales } from "#shared/i18n.ts";

type NodeDocs = Partial<Record<typeof locales[number]["code"], string>>

export default defineEventHandler(async (event) => {
    const docsPerNode: Record<string, NodeDocs> = {}

    for (const locale of locales) {
        const docs = await queryCollection(event, `docs_${locale.code}`)
            .where('path', 'LIKE', '%/nodes/%')
            .where('path', 'NOT LIKE', '%/.%') // filter out `.navigation`
            .all()

        docs.forEach(doc => {
            const nodeType = doc.path.substring(doc.path.lastIndexOf("/") + 1);
            docsPerNode[nodeType] ??= {}
            docsPerNode[nodeType][locale.code] = doc.path
        })
    }

    return docsPerNode
})
