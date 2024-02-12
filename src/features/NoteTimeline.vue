<script setup lang="ts">
import { exampleNotes, exampleUserInfo } from '@/common/applicationData'
import TimelineNoteCard from '@/components/organisms/TimelineNoteCard.vue'

const notes = exampleNotes
const user = exampleUserInfo
</script>

<template>
  <div class="fc-note-timeline">
    <TimelineNoteCard v-for="note of notes" :key="note.noteId" :note="note" :user="user" />
  </div>
</template>

<style scoped lang="scss">
.fc-note-timeline {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
