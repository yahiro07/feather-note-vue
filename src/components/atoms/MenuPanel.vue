<script setup lang="ts"></script>

<template>
  <div class="fc-menu-panel">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.fc-menu-panel {
  border: solid 1px var(--cl-primary);
  background: var(--cl-white);
  @include flexVertical();
  padding: 4px;
  color: var(--cl-gray-3);

  :slotted(*) {
    padding: 4px 8px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background: var(--cl-card-selected);
    }
  }
}
</style>
