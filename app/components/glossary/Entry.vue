<script setup lang="ts">
const props = defineProps<{
  name: string
}>()

const term = await queryCollection("glossary").path(`/glossary/${props.name}`).first()
</script>

<template>
  <ContentRenderer v-if="term" :value="term.body" class="*:my-0"/>
</template>
