<script setup lang="ts">
import type { Note } from '@/common/types'
import TimelineNoteCard from '@/components/organisms/TimelineNoteCard.vue'

defineProps<{ notes: Note[] }>()
defineEmits<{ selectNote: [string] }>()
</script>

<template>
  <div class="fc-note-timeline">
    <TimelineNoteCard
      v-for="note of notes"
      :key="note.noteId"
      :note="note"
      :user="note.user"
      @click="$emit('selectNote', note.noteId)"
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
