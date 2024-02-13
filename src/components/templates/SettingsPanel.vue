<script setup lang="ts">
import CheckboxLine from '@/components/atoms/CheckboxLine.vue'
import { useSettingsStore } from '@/store/settingsStore'

const { userOptions } = useSettingsStore()
</script>

<template>
  <div class="fc-settings-panel">
    <CheckboxLine v-model="userOptions.reverseThreadFlow" text="スクロール方向を反転" />
    <CheckboxLine v-model="userOptions.showGuidanceNotes" text="ガイダンスノートを表示" />
  </div>
</template>

<style scoped lang="scss">
.fc-settings-panel {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
