<script setup lang="ts">
import SpeechCard from '@/components/organisms/SpeechCard.vue'
import SpeechEditForm from '@/components/organisms/SpeechEditForm.vue'
import { generateIdTimeSequential } from '@/utils/idGenerator'

import { useAppStore } from '@/store/appStore'

const store = useAppStore()

function addComment(contentText: string) {
  store.currentNote.speeches.push({
    speechId: generateIdTimeSequential(),
    contentText: contentText
  })
}
</script>

<template>
  <div class="fc-note-editor">
    <div class="blocks">
      <SpeechCard
        v-for="speech of store.currentNote.speeches"
        :key="speech.speechId"
        :speech="speech"
        :user="store.currentUser"
      />
    </div>
    <SpeechEditForm :user="store.currentUser" @submit="addComment" />
  </div>
</template>

<style scoped lang="scss">
.fc-note-editor {
  display: flex;
  flex-direction: column;
  gap: 16px;

  > .blocks {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
