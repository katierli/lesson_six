<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-btn
    icon
    variant="text"
    :aria-label="theme.global.current.value.dark ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggleTheme"
  >
    <v-icon>{{ theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}</v-icon>
  </v-btn>
</template>
