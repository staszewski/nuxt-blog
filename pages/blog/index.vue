<template>
  <ul>
    <li v-for="article in articles" :key="article.createdAt">
      <a
        :href="'blog/' + article.slug"
        class="text-red-400 text-3xl font-bold"
        >{{ article.title }}</a
      >
    </li>
  </ul>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Posts',
  async asyncData({ $content }) {
    const articles = await $content('articles').fetch()
    return { articles }
  },
})
</script>

<style></style>
