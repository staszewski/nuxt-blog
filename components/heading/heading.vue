<template>
  <header class="flex phone:py-6 tablet:py-8">
    <h1 class="text-red-400 text-3xl font-bold">
      <NuxtLink to="/">Notes</NuxtLink>
    </h1>
    <Navigation :navigationItems="navigationItems" />
    <MobileNavigation :navigationItems="navigationItems" />
  </header>
</template>

<script lang="ts">
import Navigation from '~/components/navigation/navigation.vue'
import MobileNavigation from '~/components/mobile-navigation/mobile-navigation.vue'

export interface NavigationItem {
  name: string
  url: string
}

interface State {
  navigationItems: NavigationItem[]
}

const navigationItems: NavigationItem[] = [
  { name: 'Blog', url: '/blog' },
  { name: 'About', url: '/about' },
]

export default {
  name: 'heading',
  components: {
    Navigation,
    MobileNavigation,
  },
  data(): State {
    return {
      navigationItems,
    }
  },
}
</script>

<style scoped></style>
