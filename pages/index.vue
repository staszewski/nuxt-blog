<template>
  <main class="phone:flex phone:flex-col">
    <h1 class="text-red-400 phone:py-4 tablet:py-8 text-4xl phone:flex-1">
      Hi, my name is Kamil
    </h1>
    <img src="~/assets/dev-focus.svg" alt="Developer focus" />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  transition: {
    name: 'index',
    mode: 'out-in',
  },
})
</script>

<style>
.index-leave-active {
  animation: 500ms fadeIn;
}
</style>
