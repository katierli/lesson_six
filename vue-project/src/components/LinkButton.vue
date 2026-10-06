<script setup lang="ts">
defineProps<{
  label: string
  url: string
  icon: string
}>()
</script>

<template>
  <v-btn
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    block
    size="large"
    variant="tonal"
    :prepend-icon="icon"
  >
    {{ label }}
  </v-btn>
</template>
