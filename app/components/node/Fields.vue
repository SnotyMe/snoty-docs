<script setup lang="ts">
interface SchemaField {
  name: string
  type: string
  displayName: string
  description?: string | null
  details?: {
    schema?: SchemaField[] | null
    elementDetails?: {
      schema?: SchemaField[] | null
    } | null
  } | null
}

defineProps<{
  fields: SchemaField[]
}>()

function nestedSchema(field: SchemaField) {
  return field.details?.schema ?? field.details?.elementDetails?.schema ?? null
}
</script>

<template>
  <ProseFieldGroup class="space-y-3">
    <ProseField
      v-for="field in fields"
      :key="field.name"
      :name="field.displayName"
      :type="field.type"
      :description="field.description"
    >
      <NodeFields
        v-if="nestedSchema(field)?.length"
        :fields="nestedSchema(field)!"
        class="mt-3 border-l border-default pl-3"
      />
    </ProseField>
  </ProseFieldGroup>
</template>
