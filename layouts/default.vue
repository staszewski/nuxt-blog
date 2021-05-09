<template>
  <div>
    <main>
      <div id="container" class="phone:px-6 tablet:px-8">
        <Heading />
        <Nuxt />
      </div>
    </main>
    <Footer />
  </div>
</template>
<script lang="ts">
import Heading from '~/components/heading/heading.vue'
import Footer from '~/components/footer/footer.vue'

export default {
  components: { Heading, Footer },
}
</script>
<style>
html {
  font-family: 'Mukta', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

main {
  background: #7d7abc;
  min-height: 100vh;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

#container {
  margin: 0px auto;
  max-width: 960px;
  box-sizing: border-box;
}
</style>
