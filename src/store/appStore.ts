import { presetDataProvider, type PresetUserId } from '@/common/applicationData'
import { defineStore } from 'pinia'

const preset = presetDataProvider

export const useAppStore = defineStore('appStore', {
  state: () => {
    return {
      currentUserId: 'system' as PresetUserId,
      notes: preset.systemUserNotes
    }
  },
  getters: {
    allUsers: () => preset.allUsers,
    currentUser: (state) => preset.presetUserInfos[state.currentUserId],
    currentNote: (state) => state.notes[0] ?? preset.fallbackNote
  },
  actions: {
    selectUser(userId: PresetUserId) {
      this.currentUserId = userId
      if (userId === 'system') {
        this.$state.notes = preset.systemUserNotes
      } else {
        this.$state.notes = []
      }
    }
  }
})
