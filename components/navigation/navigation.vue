<template>
  <nav class="phone:hidden tablet:block">
    <ul>
      <li v-for="navigationItem in navigationItems" :key="navigationItem.url">
        <NuxtLink :to="navigationItem.url">{{ navigationItem.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

interface NavigationItem {
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

export default Vue.extend({
  name: 'navigation-component',
  data(): State {
    return {
      navigationItems,
    }
  },
})
</script>

<style scoped>
ul {
  display: flex;
  align-items: center;
  height: 100%;
}

li {
  margin: 0 1rem;
}

a {
  padding: 1rem;
}
</style>
