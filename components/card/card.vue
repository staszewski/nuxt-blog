<template>
  <NuxtLink :to="'blog/' + article.slug">
    <div>
      <h3 class="text-red-400 text-3xl font-bold">{{ article.title }}</h3>
      <p>{{ article.description }}</p>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'

export default Vue.extend({
  name: 'Card',
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
