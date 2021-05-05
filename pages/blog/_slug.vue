<template>
  <Article :article="article" />
</template>
<script lang="ts">
import Vue from 'vue'
import Article from '~/components/article/article.vue'

export default Vue.extend({
  name: 'Slug',
  components: {
    Article,
  },
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
})
</script>
