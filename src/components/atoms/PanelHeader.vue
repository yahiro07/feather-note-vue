<script setup lang="ts">
import { Icon } from '@iconify/vue'
defineProps<{ iconSpec: string; headerText: string }>()
</script>

<template>
  <h2 class="fc-panel-header">
    <Icon :icon="iconSpec" class="icon" />
    <span>{{ headerText }}</span>
  </h2>
</template>

<style scoped lang="scss">
.fc-panel-header {
  display: flex;
  align-items: center;
  color: var(--cl-panel-header);
  font-weight: var(--weight-bold);
  font-size: 1.6rem;
  > .icon {
    font-size: 1.4em;
    margin-top: 2px;
  }
}
</style>
