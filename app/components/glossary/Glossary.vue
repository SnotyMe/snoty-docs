<script setup lang="ts">
const { data: terms } = await useAsyncData('glossary', () =>
    queryCollection("glossary").all()
)

const toc = computed(() => terms.value?.map(it => ({ text: it.title })));
const route = useRoute()
route.meta.toc = toc
</script>

<template>
  <div v-if="terms">
    <div v-for="term of terms">
      <ProseH2>{{ term.title }}</ProseH2>
      <ContentRenderer :value="term.body" />
    </div>
  </div>
</template>
