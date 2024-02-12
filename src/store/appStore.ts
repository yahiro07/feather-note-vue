import { presetData } from '@/common/presetData'
import { type Note } from '@/common/types'
import { itemBy } from '@/utils/generalUtils'
import { generateIdTimeSequential } from '@/utils/idGenerator'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAppStore = defineStore('appStore', () => {
  const currentNoteId = ref<string | undefined>(undefined)
  const guestUserNotes = ref<Note[]>([])
  const currentUser = presetData.presetUsers['guest']

  const notes = computed(() => [...guestUserNotes.value, ...presetData.appIntroductionNotes])

  const currentNote = computed(() => {
    const noteId = currentNoteId.value
    if (noteId) {
      return (
        notes.value.find(itemBy({ noteId })) ??
        ({ noteId, speeches: [], user: currentUser } as Note)
      )
    }
    return undefined
  })

  const actions = {
    selectNote(noteId: string) {
      currentNoteId.value = noteId
    },
    createNewNote() {
      currentNoteId.value = generateIdTimeSequential()
    }
  }

  return {
    _currentNoteId: currentNoteId,
    _guestUserNotes: guestUserNotes,
    currentUser,
    notes,
    currentNote,
    ...actions
  }
})
