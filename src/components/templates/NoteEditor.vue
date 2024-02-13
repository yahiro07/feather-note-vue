<script setup lang="ts">
import SpeechCard from '@/components/organisms/SpeechCard.vue'
import SpeechEditForm from '@/components/organisms/SpeechEditForm.vue'
import { computed, toRef, type Ref } from 'vue'

import type { Note } from '@/common/types'
import { useAppStore } from '@/store/appStore'
import { useSettingsStore } from '@/store/settingsStore'

const store = useAppStore()
const { userOptions } = useSettingsStore()
const note = toRef(store, 'currentNote') as Ref<Note>
const isUserNote = computed(() => note.value.user.userId === 'guest')
const canComment = isUserNote
</script>

<template>
  <div :class="['fc-note-editor', userOptions.reverseThreadFlow && '--flow-reverse']">
    <div class="speeches" v-if="note.speeches.length > 0">
      <SpeechCard
        v-for="speech of note.speeches"
        :key="speech.speechId"
        :speech="speech"
        :user="note.user"
        :selected="false"
      />
    </div>
    <SpeechEditForm :user="note.user" @submit="store.createSpeech" v-if="canComment" />
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
