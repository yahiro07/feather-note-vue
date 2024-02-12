<script setup lang="ts">
import type { Note, UserInfo } from '@/common/types'
import SpeechCountLabel from '@/components/atoms/SpeechCountLabel.vue'
import SpeechCard from '@/components/organisms/SpeechCard.vue'
defineProps<{ note: Note; user: UserInfo }>()
</script>

<template>
  <SpeechCard class="fc-timeline-note-card" :speech="note.speeches[0]" :user="user">
    <template #overlay-content>
      <div class="info-additional">
        <SpeechCountLabel :count="note.speeches.length" />
      </div>
    </template>
  </SpeechCard>
</template>

<style scoped lang="scss">
.fc-timeline-note-card {
  > .info-additional {
    position: absolute;
    top: 0;
    right: 0;
    margin: 12px 16px;
    opacity: 0.7;
  }
}
</style>
