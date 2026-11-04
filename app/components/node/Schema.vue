<script setup lang="ts">
import type { NodesCollectionItem } from "@nuxt/content"
import FieldsGroup from "~/components/node/FieldsGroup.vue";

const props = defineProps<{
  node: NodesCollectionItem
}>()

const input = props.node.metadata.input
const output = props.node.metadata.output
</script>

<template>
  <div class="grid gap-6 sm:grid-cols-2">
    <FieldsGroup v-if="input" title="Input" :fields="input"/>

    <FieldsGroup v-if="output" title="Output" :fields="output"/>
  </div>
</template>
