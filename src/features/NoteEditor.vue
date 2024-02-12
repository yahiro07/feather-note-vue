<script setup lang="ts">
import SpeechCard from '@/components/organisms/SpeechCard.vue'
import SpeechEditForm from '@/components/organisms/SpeechEditForm.vue'
import { generateIdTimeSequential } from '@/utils/idGenerator'

import { useAppStore } from '@/store/appStore'
import { computed } from 'vue'

const store = useAppStore()

const displaySpeeches = computed(
  () => store.currentNote && store.currentNote?.speeches.length > 0 && store.currentNote.speeches
)

const canComment = computed(() => store.currentNote?.userId === 'guest')

function addComment(contentText: string) {
  store.currentNote?.speeches.push({
    speechId: generateIdTimeSequential(),
    contentText: contentText
  })
}
</script>

<template>
  <div class="fc-note-editor">
    <div class="speeches" v-if="displaySpeeches">
      <SpeechCard
        v-for="speech of displaySpeeches"
        :key="speech.speechId"
        :speech="speech"
        :user="store.currentUser"
      />
    </div>
    <SpeechEditForm :user="store.currentUser" @submit="addComment" v-if="canComment" />
  </div>
</template>

<style scoped lang="scss">
.fc-note-editor {
  display: flex;
  flex-direction: column;
  gap: 16px;

  > .speeches {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
