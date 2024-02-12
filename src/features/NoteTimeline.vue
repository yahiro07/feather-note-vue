<script setup lang="ts">
import { exampleNotes, exampleUserInfo } from '@/common/applicationData'
import SpeechCard from '@/components/organisms/SpeechCard.vue'

const notes = exampleNotes
const user = exampleUserInfo
</script>

<template>
  <div class="fc-note-timeline">
    <template v-for="note of notes" :key="note.noteId">
      <SpeechCard :speech="note.speeches[0]" :user="user" />
    </template>
  </div>
</template>

<style scoped lang="scss">
.fc-note-timeline {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
