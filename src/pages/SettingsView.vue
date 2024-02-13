<script setup lang="ts">
import { iconSpecs } from '@/common/constants'
import PanelHeader from '@/components/atoms/PanelHeader.vue'
import SettingsPanel from '@/components/templates/SettingsPanel.vue'
</script>

<template>
  <div class="fc-settings-view">
    <div class="narrower">
      <PanelHeader :icon-spec="iconSpecs.settings" header-text="設定" />
      <SettingsPanel class="settings-panel" />
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
    display: flex;
    flex-direction: column;
    gap: 16px;

    > .settings-panel {
      padding-left: 4px;
    }
  }
}
</style>
