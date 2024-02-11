<script setup lang="ts">
import type { Speech, UserInfo } from '@/common/applicationData'
import BlockUserInfoPart from '@/components/molecules/BlockUserInfoPart.vue'
defineProps<{ speech: Speech; user: UserInfo }>()
</script>

<template>
  <div class="fc-speech-card">
    <div class="header-row">
      <BlockUserInfoPart :user="user" />
    </div>
    <div class="content-row">
      {{ speech.contentText }}
    </div>
    <div class="footer-row"></div>
  </div>
</template>

<style scoped lang="scss">
.fc-speech-card {
  background: var(--cl-white);
  box-shadow: var(--spec-shadow-light);
  padding: 16px;

  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
