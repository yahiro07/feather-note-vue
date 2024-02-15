<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{ iconSpec?: string; text?: string }>()
</script>

<template>
  <button class="fc-button-primary">
    <Icon :icon="iconSpec" v-if="iconSpec" class="icon" />
    <span v-if="text">{{ text }}</span>
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
  font-size: 1rem;
  gap: 1px;
  cursor: pointer;
  white-space: nowrap;
  > .icon {
    font-size: 1.3em;
    margin-top: 3px;
  }

  @include styleClickable;

  &:disabled {
    opacity: var(--spec-opacity-control-disabled);
  }
}
</style>
