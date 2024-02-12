<script setup lang="ts">
import SpeechCard from '@/components/organisms/SpeechCard.vue'
import SpeechEditForm from '@/components/organisms/SpeechEditForm.vue'
import { generateIdTimeSequential } from '@/utils/idGenerator'

import type { Note } from '@/common/applicationData'
import { useAppStore } from '@/store/appStore'
import { computed } from 'vue'

const store = useAppStore()
const props = defineProps<{ note: Note }>()
const canComment = computed(() => props.note.userId === 'guest')

function addComment(contentText: string) {
  //TODO: ストア側で発言をノートに追加する
  // eslint-disable-next-line vue/no-mutating-props
  props.note.speeches.push({
    speechId: generateIdTimeSequential(),
    contentText: contentText
  })
}
</script>

<template>
  <div class="fc-note-editor">
    <div class="speeches" v-if="note.speeches.length > 0">
      <SpeechCard
        v-for="speech of note.speeches"
        :key="speech.speechId"
        :speech="speech"
        :user="store.getUser(note.userId)"
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
