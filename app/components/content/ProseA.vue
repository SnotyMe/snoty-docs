<script setup lang="ts">
const props = defineProps<{
  href: string
  target?: string
  rel?: string
}>()

const isExternal = computed(() => props.href.startsWith('http') || props.href.startsWith('//'))
</script>

<template>
  <ULink
      :to="href"
      :target="target"
      :rel="rel"
      :active="true"
  >
    <slot />
    <UIcon
        v-if="isExternal"
        name="i-lucide-external-link"
        class="inline-block ml-1 size-3.5 align-text-center opacity-70"
    />
  </ULink>
</template>
