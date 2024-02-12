<script setup lang="ts">
import { Icon } from '@iconify/vue'
defineProps<{ count: number }>()
</script>

<template>
  <div class="fc-speech-count-label">
    <Icon icon="iconamoon:comment-dots-light" class="icon" />
    <span>{{ count }}</span>
  </div>
</template>

<style scoped lang="scss">
.fc-speech-count-label {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  > .icon {
    font-size: 1.3em;
    margin-top: 2px;
  }
}
</style>
