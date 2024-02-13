<script setup lang="ts">
import GithubLinkButton from '@/components/atoms/GithubLinkButton.vue'
import SideBar from '@/components/templates/SideBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="fc-app">
    <SideBar />
    <div class="main-column">
      <RouterView />
    </div>
    <GithubLinkButton class="github-link-button" />
  </div>
</template>

<style scoped lang="scss">
.fc-app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  background: var(--cl-site-background);

  > .fc-side-bar {
    flex-shrink: 0;
  }

  > .main-column {
    flex-grow: 1;
  }

  > .github-link-button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
