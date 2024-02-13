<script setup lang="ts">
import TimelineNoteCard from '@/components/organisms/TimelineNoteCard.vue'
import { useAppStore } from '@/store/appStore'

const store = useAppStore()
</script>

<template>
  <div class="fc-note-timeline">
    <TimelineNoteCard
      v-for="note of store.allNotes"
      :key="note.noteId"
      :note="note"
      :user="note.user"
      :selected="note.noteId === store.currentNoteId"
      @click="store.selectNote(note.noteId)"
    />
  </div>
</template>

<style scoped lang="scss">
.fc-note-timeline {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
