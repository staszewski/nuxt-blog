<template>
  <ul>
    <li v-for="article in articles" :key="article.createdAt">
      <Card :article="article" />
    </li>
  </ul>
</template>

<script>
import Vue from 'vue'
import Card from '~/components/card/card.vue'

export default Vue.extend({
  name: 'Blog',
  components: {
    Card,
  },
  transition: {
    name: 'blog',
    mode: 'out-in',
  },
  async asyncData({ $content }) {
    const articles = await $content('articles').fetch()
    return { articles }
  },
})
</script>

<style>
.blog-leave-active {
  animation: 500ms fadeIn;
}
</style>
