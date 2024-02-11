<script setup lang="ts">
import { exampleNotes, exampleUserInfo } from '@/common/applicationData'
import SpeechCard from '@/components/organisms/SpeechCard.vue'
import SpeechEditForm from '@/components/organisms/SpeechEditForm.vue'
import { generateIdTimeSequential } from '@/utils/idGenerator'
import { ref } from 'vue'

const note = ref(exampleNotes[0])
const user = exampleUserInfo

function addComment(contentText: string) {
  note.value.speeches.push({
    speechId: generateIdTimeSequential(),
    contentText: contentText
  })
}
</script>

<template>
  <div class="fc-note-editor">
    <div class="blocks">
      <SpeechCard v-for="item of note.speeches" :key="item.speechId" :speech="item" :user="user" />
    </div>
    <SpeechEditForm :user="user" @submit="addComment" />
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
