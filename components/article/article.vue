<template>
  <article>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <nuxt-content :document="article" :is="content" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: String,
    description: String,
    article: Object,
  },
})
</script>

<style scoped></style>
