<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{ icon?: string; text?: string }>()
</script>

<template>
  <div class="fc-text-with-icon">
    <Icon :icon="icon" class="icon" v-if="icon" />
    <span class="text" v-if="text">{{ text }}</span>
  </div>
</template>

<style scoped lang="scss">
.fc-text-with-icon {
  @include flexAligned();
  > .text {
    white-space: nowrap;
  }
}
</style>
