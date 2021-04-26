<template>
  <article>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <nuxt-content :is="content" :document="article" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    article: {
      type: String,
      default: '',
    },
  },
})
</script>

<style scoped></style>
