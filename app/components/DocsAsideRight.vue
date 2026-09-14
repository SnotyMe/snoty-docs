<script setup lang="ts">
import DocusAsideRight from "docus/app/components/docs/DocsAsideRight.vue"
import type { DocsCollectionItem } from "@nuxt/content"
import type { ContentTocLink } from "@nuxt/ui"

const props = defineProps<{
  page?: DocsCollectionItem | null
}>()
const route = useRoute()

const computedPage = computed(() => {
  const page = props.page
  if (!page) return page

  return {
    ...page,
    body: {
      ...(page.body ?? {}),
      toc: {
        ...(page.body?.toc ?? {}),
        links: [
            ...(page.body?.toc?.links ?? []),
            ...(route.meta.toc as ContentTocLink[] ?? []),
        ]
      }
    }
  }
})
</script>

<template>
  <DocusAsideRight :page="computedPage"/>
</template>
