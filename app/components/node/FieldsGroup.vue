<script setup lang="ts">
import type { SchemaField } from "~/components/node/Fields.vue"

const props = defineProps<{
  title: string
  fields: SchemaField[]
}>()
</script>

<template>
  <section>
    <h3 class="mb-3 text-sm font-semibold">{{ title }}</h3>
    <NodeFields v-if="fields?.length" :fields="fields"/>
    <p v-else class="text-sm text-dimmed">None</p>
  </section>
</template>
