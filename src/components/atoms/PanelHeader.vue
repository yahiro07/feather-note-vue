<script setup lang="ts">
import { Icon } from '@iconify/vue'
defineProps<{ iconSpec: string; headerText: string }>()
</script>

<template>
  <div class="fc-panel-header">
    <h2>
      <Icon :icon="iconSpec" class="icon" />
      <span>{{ headerText }}</span>
    </h2>
    <slot name="ui-left-part" />
    <div class="spacer" />
    <slot name="ui-right-part" />
  </div>
</template>

<style scoped lang="scss">
.fc-panel-header {
  @include flexAligned(12);
  color: var(--cl-panel-header);

  > h2 {
    @include flexAligned();
    font-weight: var(--weight-bold);
    font-size: 1.5rem;
    white-space: nowrap;
    > .icon {
      font-size: 1.4em;
      margin-top: 2px;
    }
  }

  > .spacer {
    margin-left: auto;
  }
}
</style>
