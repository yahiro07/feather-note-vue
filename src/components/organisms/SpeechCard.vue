<script setup lang="ts">
import type { Speech, UserInfo } from '@/common/applicationData'
import SpeechUserInfoPart from '@/components/molecules/SpeechUserInfoPart.vue'
defineProps<{ speech: Speech; user: UserInfo }>()
</script>

<template>
  <div class="fc-speech-card">
    <div class="header-row">
      <SpeechUserInfoPart :user="user" />
    </div>
    <div class="content-row">
      {{ speech.contentText }}
    </div>
    <div class="footer-row"></div>
    <slot name="overlay-content" />
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
  position: relative;
}
</style>
