<script setup lang="ts">
export interface SchemaField {
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
  <ProseFieldGroup>
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
        class="border-l border-default pl-5"
      />
    </ProseField>
  </ProseFieldGroup>
</template>
