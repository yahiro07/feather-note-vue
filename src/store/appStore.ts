import { presetDataProvider, type Note, type PresetUserId } from '@/common/applicationData'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const pd = presetDataProvider

export const useAppStore = defineStore('appStore', () => {
  const currentUserId = ref<PresetUserId>('system')
  const notes = ref<Note[]>(pd.systemUserNotes)

  const currentUser = computed(() => pd.presetUserInfos[currentUserId.value])
  const currentNote = computed(() => notes.value[0] ?? presetDataProvider.fallbackNote)

  const selectUser = (userId: PresetUserId) => {
    currentUserId.value = userId
    if (userId === 'system') {
      notes.value = pd.systemUserNotes
    } else {
      notes.value = []
    }
  }

  return {
    allUsers: pd.allUsers,
    currentUser,
    notes,
    currentNote,
    selectUser
  }
})
