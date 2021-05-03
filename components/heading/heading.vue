<template>
  <header class="flex phone:py-6 tablet:py-8">
    <h1 class="text-red-400 text-3xl font-bold">
      <NuxtLink to="/">Notes</NuxtLink>
    </h1>
    <Navigation />
    <MobileNavigation />
  </header>
</template>

<script>
import Navigation from '~/components/navigation/navigation.vue'
import MobileNavigation from '~/components/mobile-navigation/mobile-navigation.vue'

export default {
  name: 'heading',
  components: {
    Navigation,
    MobileNavigation,
  },
}
</script>

<style scoped></style>
