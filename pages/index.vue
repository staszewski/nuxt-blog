<template>
  <h1 class="text-red-400">Hi, my name is Kamil</h1>
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
