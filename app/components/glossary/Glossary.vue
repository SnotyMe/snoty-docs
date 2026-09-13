<script setup lang="ts">
const { data: terms } = await useAsyncData('glossary', () =>
    queryCollection("glossary").all()
)

definePageMeta({
  page: {
    title: 'Glossary',
    body: {
      toc: {
        links: terms.value?.map(term => ({
          id: term.stem,
          text: term.title,
          depth: 2
        })) || []
      }
    }
  }
})

</script>

<template>
  <div v-if="terms">
    <div v-for="term of terms">
      <UHeader>{{ term.title }}</UHeader>
      <ContentRenderer v-for="term of terms" :value="term" />
    </div>
  </div>
</template>
