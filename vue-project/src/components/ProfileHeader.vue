<script setup lang="ts">
defineProps<{
  initials: string
  name: string
  bio: string
}>()
</script>

<template>
  <div class="text-center">
    <v-avatar size="96" color="surface-variant" class="mb-4">
      <span class="text-h6">{{ initials }}</span>
    </v-avatar>

    <v-card-title class="text-h5 font-weight-bold justify-center pa-0">
      {{ name }}
    </v-card-title>
    <v-card-subtitle class="text-wrap mb-6 pa-0">
      {{ bio }}
    </v-card-subtitle>
  </div>
</template>
