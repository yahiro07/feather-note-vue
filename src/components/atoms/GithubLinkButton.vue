<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="fc-github-link-button">
    <a href="https://github.com/yahiro07/feather-note-vue" target="_blank">
      <Icon icon="mdi:github" class="icon" />
      <span>source</span>
    </a>
  </div>
</template>

<style scoped lang="scss">
.fc-github-link-button {
  margin-top: 4px;
  margin-right: 20px;
  > a {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    > .icon {
      font-size: 1.5em;
    }

    @include styleClickable;
  }
}
</style>
