import { presetData } from '@/common/presetData'
import { type Note, type Speech } from '@/common/types'
import { usePersistStore } from '@/store/persistStore'
import { itemBy } from '@/utils/generalUtils'
import { generateIdTimeSequential } from '@/utils/idGenerator'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAppStore = defineStore('appStore', () => {
  const {
    persistData: { userInfo, userNotes, userOptions }
  } = usePersistStore()

  const currentNoteId = ref<string | undefined>(userNotes[0]?.noteId)

  const allNotes = computed(() => {
    if (userOptions.showGuidanceNotes) {
      return [...userNotes, ...presetData.systemNotes]
    } else {
      return userNotes
    }
  })

  const currentNote = computed(() => {
    const noteId = currentNoteId.value
    if (noteId) {
      return (
        allNotes.value.find(itemBy({ noteId })) ??
        ({ noteId, speeches: [], user: userInfo } as Note)
      )
    }
    return undefined
  })

  const actions = {
    selectNote(noteId: string) {
      currentNoteId.value = noteId
    },
    createNote() {
      currentNoteId.value = generateIdTimeSequential()
    },
    createSpeech(contentText: string) {
      const note = currentNote.value
      if (!note) return
      const firstSpeech = note.speeches.length == 0
      const speech: Speech = {
        speechId: generateIdTimeSequential(),
        contentText
      }
      note.speeches.push(speech)
      if (firstSpeech) {
        userNotes.unshift(note)
      }
    }
  }

  return {
    _currentNoteId: currentNoteId,
    userInfo,
    allNotes,
    currentNote,
    ...actions
  }
})
