<script setup lang="ts">
interface LinkItem {
  label: string
  href: string
  icon: string
}

const links: LinkItem[] = [
  { label: 'Portfolio', href: 'https://example.com', icon: '🎨' },
  { label: 'Dribbble', href: 'https://dribbble.com/', icon: '🏀' },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: '💼' },
  { label: 'Email', href: 'mailto:hello@example.com', icon: '✉️' },
]
</script>

<template>
  <main class="card">
    <div class="avatar" aria-hidden="true">KL</div>
    <h1 class="name">Katie Li</h1>
    <p class="tagline">Designer &amp; builder of delightful digital things.</p>

    <nav class="links">
      <a
        v-for="link in links"
        :key="link.label"
        class="link-button"
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="link-icon" aria-hidden="true">{{ link.icon }}</span>
        <span>{{ link.label }}</span>
      </a>
    </nav>
  </main>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: var(--color-bg-soft);
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-heading);
}

.tagline {
  color: var(--color-text);
  opacity: 0.8;
  margin: 0.5rem 0 1.75rem;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}

.link-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.85rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid var(--color-border);
  background: var(--color-button-bg);
  color: var(--color-heading);
  text-decoration: none;
  font-weight: 500;
  transition:
    background-color 0.2s,
    transform 0.1s;
}

.link-button:hover {
  background: var(--color-button-bg-hover);
}

.link-button:active {
  transform: scale(0.98);
}

.link-icon {
  font-size: 1.1rem;
}
</style>
