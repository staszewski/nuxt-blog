<template>
  <article>
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <NuxtContent :is="blogcontent" :document="article" />
  </article>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'

export default Vue.extend({
  name: 'Article',
  props: {
    article: {
      type: Object as PropType<
        IContentDocument & { title: string; description: string }
      >,
      default() {
        return {
          title: 'Something went wrong',
          description: 'Please go to main page',
        }
      },
    },
  },
})
</script>

<style scoped></style>
