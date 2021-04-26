<template>
  <Article
    :title="article.title"
    :description="article.description"
    :article="article"
  />
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
})
</script>
