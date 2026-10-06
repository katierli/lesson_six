import { ref, watchEffect } from 'vue'

type Theme = 'dark' | 'light'

const STORAGE_KEY = 'theme'

// shared across all components so the toggle stays in sync app-wide
const theme = ref<Theme>((localStorage.getItem(STORAGE_KEY) as Theme | null) ?? 'dark')

watchEffect(() => {
  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem(STORAGE_KEY, theme.value)
})

export function useTheme() {
  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  return { theme, toggleTheme }
}
