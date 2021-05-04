<template>
  <div id="nav-icon" :class="{ open }">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MobileNavigationIcon',
  props: {
    open: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
})
</script>

<style scoped>
#nav-icon {
  width: 60px;
  height: 45px;
  position: relative;
  margin: 50px auto;
  transform: rotate(0deg);
  transition: 0.5s 0.5s cubic-bezier(0.55, 0.06, 0.68, 0.19);
  cursor: pointer;
}

#nav-icon span {
  display: block;
  position: absolute;
  height: 9px;
  width: 100%;
  background: #d3531a;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}

#nav-icon span:nth-child(1) {
  top: 0px;
  transform-origin: left center;
}

#nav-icon span:nth-child(2) {
  top: 18px;
  transform-origin: left center;
}

#nav-icon span:nth-child(3) {
  top: 36px;
  transform-origin: left center;
}

#nav-icon.open span:nth-child(1) {
  transform: rotate(45deg);
  top: -3px;
  left: 8px;
}

#nav-icon.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}

#nav-icon.open span:nth-child(3) {
  transform: rotate(-45deg);
  top: 39px;
  left: 8px;
}
</style>
