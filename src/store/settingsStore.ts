import { textCaps } from '@/common/constants'
import { usePersistStore } from '@/store/persistStore'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settingsStore', () => {
  const {
    persistData: { userOptions, userInfo }
  } = usePersistStore()

  const actions = {
    editUserName() {
      const newName = window.prompt('ユーザー名', userInfo.userName)
      if (newName !== null && newName !== userInfo.userName) {
        if (newName === '') {
          window.alert(`名前を入力してください`)
        } else if (newName.length > textCaps.userName) {
          window.alert(`名前が長すぎます`)
        } else {
          userInfo.userName = newName
        }
      }
    },
    loadUserAvatarImage() {}
  }
  return { userOptions, userInfo, ...actions }
})
