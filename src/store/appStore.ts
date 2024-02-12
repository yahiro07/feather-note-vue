import { presetDataProvider, type Note, type PresetUserId } from '@/common/applicationData'
import { itemBy } from '@/utils/generalUtils'
import { generateIdTimeSequential } from '@/utils/idGenerator'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const pd = presetDataProvider

export const useAppStore = defineStore('appStore', () => {
  const currentUserId = ref<PresetUserId>('system')
  const currentNoteId = ref<string | undefined>(undefined)
  const guestUserNotes = ref<Note[]>([])
  const currentUser = computed(() => pd.presetUserInfos[currentUserId.value])

  const notes = computed(() =>
    currentUserId.value === 'system' ? pd.systemUserNotes : guestUserNotes.value
  )

  const currentNote = computed(() => {
    const noteId = currentNoteId.value
    if (noteId) {
      return (
        notes.value.find(itemBy({ noteId })) ?? ({ noteId, speeches: [], userId: 'guest' } as Note)
      )
    }
    return undefined
  })

  const actions = {
    selectUser(userId: PresetUserId) {
      currentUserId.value = userId
      currentNoteId.value = undefined
    },
    selectNote(noteId: string) {
      currentNoteId.value = noteId
    },
    createNewNote() {
      currentNoteId.value = generateIdTimeSequential()
    }
  }

  return {
    allUsers: pd.allUsers,
    currentUser,
    notes,
    currentNote,
    ...actions
  }
})
