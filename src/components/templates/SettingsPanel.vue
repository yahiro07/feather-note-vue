<script setup lang="ts">
import CheckboxLine from '@/components/atoms/CheckboxLine.vue'
import { useSettingsStore } from '@/store/settingsStore'

const settingsStore = useSettingsStore()
</script>

<template>
  <div class="fc-settings-panel">
    <CheckboxLine
      :checked="settingsStore.showGuidanceNotes"
      text="ガイダンスノートを表示"
      @checked="settingsStore.setShowGuidanceNotes"
    />
    <CheckboxLine
      :checked="settingsStore.reverseThreadFlow"
      text="スクロール方向を反転"
      @checked="settingsStore.setReverseThreadFlow"
    />
  </div>
</template>

<style scoped lang="scss">
.fc-settings-panel {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
