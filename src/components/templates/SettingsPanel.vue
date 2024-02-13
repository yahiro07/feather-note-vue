<script setup lang="ts">
import CheckboxLine from '@/components/atoms/CheckboxLine.vue'
import ProfileEditPart from '@/components/organisms/ProfileEditPart.vue'
import { useSettingsStore } from '@/store/settingsStore'

const { userOptions } = useSettingsStore()
</script>

<template>
  <div class="fc-settings-panel">
    <div class="block">
      <h3>プロフィール</h3>
      <div class="content">
        <ProfileEditPart />
      </div>
    </div>
    <div class="block">
      <h3>機能設定</h3>
      <div class="content">
        <CheckboxLine v-model="userOptions.reverseThreadFlow" text="スクロール方向を反転" />
        <CheckboxLine v-model="userOptions.showGuidanceNotes" text="ガイダンスノートを表示" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.fc-settings-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;

  > .block {
    > h3 {
      margin-bottom: 12px;
    }
    > .content {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
}
</style>
