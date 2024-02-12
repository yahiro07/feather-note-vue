import { presetData } from '@/common/presetData'
import { type Note, type Speech } from '@/common/types'
import { itemBy } from '@/utils/generalUtils'
import { generateIdTimeSequential } from '@/utils/idGenerator'
import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAppStore = defineStore('appStore', () => {
  const userNotes = useLocalStorage<Note[]>('stepnote_vue_user_notes', [])
  const currentNoteId = ref<string | undefined>(userNotes.value[0]?.noteId)
  const guestUser = presetData.presetUsers['guest']

  const notes = computed(() => [...userNotes.value, ...presetData.systemNotes])

  const currentNote = computed(() => {
    const noteId = currentNoteId.value
    if (noteId) {
      return (
        notes.value.find(itemBy({ noteId })) ?? ({ noteId, speeches: [], user: guestUser } as Note)
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
        userNotes.value.unshift(note)
      }
    }
  }

  return {
    _currentNoteId: currentNoteId,
    _userNotes: userNotes,
    guestUser,
    notes,
    currentNote,
    ...actions
  }
})
