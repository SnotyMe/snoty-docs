<script setup lang="ts">

import type { NodesCollectionItem } from "@nuxt/content"

const { data: nodes } = await useAsyncData('nodes', () => {
  return queryCollection('nodes')
      .all()
})

</script>

<template>
  <ProseCardGroup>
    <template v-for="node of nodes">
      <ProseCard
          :title="node.metadata.displayName"
          :to="`/nodes/builtin/${node.type}`"
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
          <UIcon name="i-lucide-file-text" class="ml-auto"/>
        </template>
      </ProseCard>
    </template>
  </ProseCardGroup>
</template>
