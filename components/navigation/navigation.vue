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

export default Vue.extend({
  name: 'navigation-component',
  props: {
    navigationItems: {
      type: Array,
      default() {
        return []
      },
    },
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
