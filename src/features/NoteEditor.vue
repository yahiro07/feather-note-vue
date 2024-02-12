<script setup lang="ts">
import SpeechCard from '@/components/organisms/SpeechCard.vue'
import SpeechEditForm from '@/components/organisms/SpeechEditForm.vue'

import type { Note } from '@/common/types'
import { computed } from 'vue'

const props = defineProps<{ note: Note }>()
const emit = defineEmits<{ createSpeech: [string] }>()

const isUserNote = computed(() => props.note.user.userId === 'guest')

const canComment = isUserNote
const isReverseFlow = false

function addComment(contentText: string) {
  emit('createSpeech', contentText)
}
</script>

<template>
  <div :class="['fc-note-editor', isReverseFlow && '--flow-reverse']">
    <div class="speeches" v-if="note.speeches.length > 0">
      <SpeechCard
        v-for="speech of note.speeches"
        :key="speech.speechId"
        :speech="speech"
        :user="note.user"
      />
    </div>
    <SpeechEditForm :user="note.user" @submit="addComment" v-if="canComment" />
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

  &.--flow-reverse {
    flex-direction: column-reverse;
    > .speeches {
      flex-direction: column-reverse;
    }
  }
}
</style>
