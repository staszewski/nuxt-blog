<template>
  <div class="tablet:hidden">
    <button v-on:click="open = !open" aria-label="Open menu">
      <MobileNavigationIcon :open="open"/>
    </button>
    <div class="mobile-nav" v-if="open">
      <nav>
        <ul>
          <li
            v-on:click="open = !open"
            v-for="navigationItem in navigationItems"
            :key="navigationItem.url"
          >
            <NuxtLink :to="navigationItem.url">{{
              navigationItem.name
            }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MobileNavigationIcon from '~/components/mobile-navigation-icon/mobile-navigation-icon.vue'

interface State {
  open: boolean
}

export default Vue.extend({
  name: 'mobile-navigation',
  components: {
    MobileNavigationIcon,
  },
  data(): State {
    return {
      open: false,
    }
  },
  props: {
    navigationItems: {
      type: Array,
      default() {
        return []
      },
    },
  },
})
</script>

<style scoped>
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}

button {
  position: fixed;
  top: 1rem;
  z-index: 10001;
  right: 32px;
  width: 60px;
}

.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: red;
  animation: 800ms cubic-bezier(0.535, 0, 0, 1) slideIn;
}
</style>
