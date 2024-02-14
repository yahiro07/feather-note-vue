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
  @include flexAligned(2);
  font-size: 1.5rem;
  > .icon {
    font-size: 1.1em;
    margin-top: 4px;
  }
}
</style>
