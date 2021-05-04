<template>
  <div class="tablet:hidden">
    <button aria-label="Open menu" @click="open = !open">
      <MobileNavigationIcon :open="open" />
    </button>
    <div v-if="open" class="mobile-nav">
      <nav aria-label="Mobile navigation">
        <ul>
          <li
            v-for="navigationItem in navigationItems"
            :key="navigationItem.url"
            @click="open = !open"
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
  name: 'MobileNavigation',
  components: {
    MobileNavigationIcon,
  },
  props: {
    navigationItems: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data(): State {
    return {
      open: false,
    }
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
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: red;
  animation: 800ms cubic-bezier(0.535, 0, 0, 1) slideIn;
}
</style>
