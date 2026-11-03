<script setup lang="ts">
import type { NodesCollectionItem } from "@nuxt/content"

const props = defineProps<{
  node: NodesCollectionItem
}>()

const input = props.node.metadata.input
const output = props.node.metadata.output
</script>

<template>
  <div class="grid gap-6 sm:grid-cols-2">
    <section>
      <h3 class="mb-3 text-sm font-semibold">Input</h3>
      <NodeFields v-if="input?.length" :fields="input" />
      <p v-else class="text-sm text-dimmed">None</p>
    </section>

    <section>
      <h3 class="mb-3 text-sm font-semibold">Output</h3>
      <NodeFields v-if="output?.length" :fields="output" />
      <p v-else class="text-sm text-dimmed">None</p>
    </section>
  </div>
</template>
