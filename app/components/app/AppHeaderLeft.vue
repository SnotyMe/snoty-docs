<script setup lang="ts">
import { useAppConfig } from "nuxt/app";
import { useSiteConfig } from "#imports";

const appConfig = useAppConfig()
const site = useSiteConfig()

const ariaLabel = appConfig.header?.title || site.name
</script>

<template>
  <NuxtLink
      :to="site.marketingUrl"
      :aria-label="ariaLabel"
  >
    <AppHeaderLogo class="h-6 w-auto shrink-0"/>
  </NuxtLink>
</template>
