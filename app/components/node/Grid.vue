<script setup lang="ts">

import type { NodesCollectionItem } from "@nuxt/content"

const { data: nodes } = await useAsyncData('nodes', () => {
  return queryCollection('nodes')
      .all()
})

const { data: documentedNodes } = await useAsyncData('nodes-documented', () => {
  return queryCollection('docs_en')
      .where("path", "LIKE", "%/nodes/builtin/%")
      .all()
})

function hasDocs(node: NodesCollectionItem) {
  const allDocumentedNodes = documentedNodes.value
  if (!allDocumentedNodes) return

  return allDocumentedNodes.some(it => it.path.endsWith(node.descriptor.name))
}
</script>

<template>
  <ProseCardGroup>
    <template v-for="node of nodes">
      <ProseCard
          :title="node.metadata.displayName"
          :to="hasDocs(node) ? `/nodes/builtin/${node.descriptor.name}` : undefined"
          :icon="node.metadata.icon"
          :ui="{ title: 'w-full inline-flex items-center gap-2' }"
      >
        <template #title>
          <UIcon
              v-if="node.metadata.icon"
              :name="`i-${node.metadata.icon.name}`"
              :style="`color: ${node.metadata.icon.color}`"
              class="size-5"
          />
          {{ node.metadata.displayName }}
          <UIcon v-if="hasDocs(node)" name="i-lucide-file-text" class="ml-auto"/>
        </template>
      </ProseCard>
    </template>
  </ProseCardGroup>
</template>
