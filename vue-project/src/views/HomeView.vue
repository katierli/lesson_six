<script setup lang="ts">
import ThemeToggle from '../components/ThemeToggle.vue'
import LinkButton from '../components/LinkButton.vue'
import ProfileHeader from '../components/ProfileHeader.vue'

interface LinkItem {
  label: string
  url: string
  icon: string
}

const links: LinkItem[] = [
  { label: 'Portfolio', url: 'https://example.com', icon: 'mdi-briefcase-outline' },
  { label: 'Dribbble', url: 'https://dribbble.com/', icon: 'mdi-basketball' },
  { label: 'LinkedIn', url: 'https://linkedin.com/', icon: 'mdi-linkedin' },
  { label: 'Email', url: 'mailto:hello@example.com', icon: 'mdi-email-outline' },
]
</script>

<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="12" sm="8" md="6" lg="4">
        <div class="d-flex justify-end mb-2">
          <ThemeToggle />
        </div>

        <v-card class="mx-auto pa-6 text-center" max-width="480" width="100%" rounded="lg">
          <ProfileHeader
            initials="KL"
            name="Katie Li"
            bio="Designer &amp; builder of delightful digital things."
          />

          <v-row dense>
            <v-col v-for="link in links" :key="link.label" cols="12">
              <LinkButton :label="link.label" :url="link.url" :icon="link.icon" />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
