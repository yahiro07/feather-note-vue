<script setup lang="ts">
import SideBarVue from '@/layout/SideBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="fc-app">
    <SideBarVue />
    <div class="main-column">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.fc-app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  background: var(--cl-site-background);
  color: var(--cl-main-text);

  > .fc-side-bar {
    flex-shrink: 0;
  }

  > .main-column {
    flex-grow: 1;
  }
}
</style>
