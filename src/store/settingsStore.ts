import { appConstants, textCaps } from '@/common/constants'
import { openConfirmDialog, openTextInputDialog } from '@/components/modals'
import { usePersistStore } from '@/store/persistStore'
import { loadAvatarImageFromLocalFile } from '@/utils/avatarImageLoader'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settingsStore', () => {
  const {
    persistData: { userOptions, userInfo, userNotes },
    resetPersistData
  } = usePersistStore()

  const internal = {
    affectUserInfoToNotes() {
      userNotes.forEach((note) => (note.user = userInfo))
    }
  }

  const actions = {
    async editUserName() {
      const newName = await openTextInputDialog({
        message: 'ユーザー名',
        default: userInfo.userName
      })
      if (newName !== null && newName !== userInfo.userName) {
        if (newName === '') {
          await openConfirmDialog({ title: 'エラー', message: `名前を入力してください` })
        } else if (newName.length > textCaps.userName) {
          await openConfirmDialog({ title: 'エラー', message: `名前が長すぎます` })
        } else {
          userInfo.userName = newName
          internal.affectUserInfoToNotes()
        }
      }
    },
    async loadUserAvatarImage() {
      const imageDataUrl = await loadAvatarImageFromLocalFile(appConstants.avatarImageSize)
      const size = (new TextEncoder().encode(imageDataUrl).byteLength / 1000) >>> 0
      console.log(`image data size: ${size}kB`)
      userInfo.avatarUrl = imageDataUrl
      internal.affectUserInfoToNotes()
    },
    async resetUserData() {
      const ok = await openConfirmDialog({ message: '保存データをリセットします。よろしいですか?' })
      if (ok) {
        resetPersistData()
      }
    }
  }
  return { userOptions, userInfo, ...actions }
})
