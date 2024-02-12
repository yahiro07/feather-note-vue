<script setup lang="ts">
import { iconSpecs } from '@/common/constants'
import PanelHeader from '@/components/atoms/PanelHeader.vue'
</script>

<template>
  <div class="fc-settings-view">
    <div class="narrower">
      <PanelHeader :icon-spec="iconSpecs.settings" header-text="設定" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.fc-settings-view {
  padding: 10px;
  display: flex;
  justify-content: center;

  > .narrower {
    flex-grow: 1;
    max-width: 600px;
  }
}
</style>
