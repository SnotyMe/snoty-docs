<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const route = useRoute()
const { locale, isEnabled } = useDocusI18n()
const collectionName = computed(() => isEnabled.value ? `docs_${locale.value}` : 'docs')
const nodeType = computed(() => String(route.params.type))

const [{ data: page }, { data: node }] = await Promise.all([
  useAsyncData(`node-page-${route.path}`, () => queryCollection(collectionName.value as keyof Collections).path(route.path).first()),
  useAsyncData(`node-data-${nodeType.value}`, () => queryCollection('nodes').where('type', '=', nodeType.value).first()),
])

if (!node.value) {
  throw createError({statusCode: 404, statusMessage: 'Node not found', fatal: false})
}

const title = computed(() => node.value?.metadata.displayName || nodeType.value)

definePageMeta({
  layout: "docs"
})
</script>

<template>
  <UPage>
    <UPageHeader :title="title"/>
    <UPageBody>
      <ContentRenderer v-if="page" :value="page"/>
      <USeparator v-if="page" class="my-8"/>
      <h2 class="mb-6 text-2xl font-bold">Schema</h2>
      <NodeSchema :node="node"/>
    </UPageBody>
  </UPage>
</template>
