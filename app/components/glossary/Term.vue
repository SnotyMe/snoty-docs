<script setup lang="ts">

const props = defineProps<{
  name: string
  plural?: boolean
}>()

const term = await queryCollection("glossary").path(`/glossary/${props.name}`).first()
</script>

<template>
  <template v-if="term">
    <UPopover mode="hover" arrow>
      <ULink :href="`/developers/glossary#${name}`" class="italic">{{ term.title }}{{ plural ? "s" : ""}}</ULink>

      <template #content>
        <div class="max-w-lg p-4">
          <ContentRenderer :value="term.body" class="*:my-0"/>
        </div>
      </template>
    </UPopover>
  </template>
</template>
