<script setup lang="ts">
import ButtonPrimary from '@/components/atoms/ButtonPrimary.vue'
import SpeechUserInfoPart from '@/components/molecules/SpeechUserInfoPart.vue'
import { useSettingsStore } from '@/store/settingsStore'

const { userInfo } = useSettingsStore()
</script>

<template>
  <div class="fc-profile-edit-part">
    <SpeechUserInfoPart :user="userInfo" />
    <div class="buttons">
      <ButtonPrimary text="名前を変更" />
      <ButtonPrimary text="画像をロード" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.fc-profile-edit-part {
  display: flex;
  align-items: center;
  gap: 12px;

  > .buttons {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>
