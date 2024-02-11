<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{ iconSpec?: string; text?: string; disabled?: boolean }>()
</script>

<template>
  <button class="fc-button-primary" :disabled="disabled">
    <Icon :icon="iconSpec" v-if="iconSpec" class="icon" />
    <span v-if="text">{{ text }}</span>
    {{ disabled }}
  </button>
</template>

<style scoped lang="scss">
.fc-button-primary {
  background: var(--cl-button-primary);
  color: var(--cl-white);
  height: 32px;
  border: none;
  font-weight: var(--weight-bold);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  font-size: 12px;
  cursor: pointer;
  > .icon {
    font-size: 1.2em;
  }

  transition: var(--transition-common);
  &:hover {
    opacity: var(--hover-opacity-common);
  }

  &:disabled {
    opacity: var(--spec-opacity-control-disabled);
  }
}
</style>
