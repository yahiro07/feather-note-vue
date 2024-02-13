<script setup lang="ts">
import type { Speech, UserInfo } from '@/common/types'
import SpeechUserInfoPart from '@/components/molecules/SpeechUserInfoPart.vue'
import { getElapsedTimeText } from '@/utils/dateTimeHelper'
defineProps<{ speech: Speech; user: UserInfo; selected: boolean }>()
</script>

<template>
  <div :class="['fc-speech-card', selected && '--selected']">
    <div class="header-row">
      <SpeechUserInfoPart :user="user" />
      <span class="time">{{ getElapsedTimeText(speech.createAt) }}</span>
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
  @include flexVertical(8);
  position: relative;

  > .header-row {
    @include flexAligned(12);
    > .time {
      color: var(--cl-gray-2);
      font-size: 0.9rem;
    }
  }
  border: solid 1px transparent;

  &.--selected {
    border: solid 1px var(--cl-card-selected);
  }
}
</style>
