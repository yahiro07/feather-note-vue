import { textCaps } from '@/common/constants'
import { presetData } from '@/common/presetData'
import { type Note, type Speech } from '@/common/types'
import { usePersistStore } from '@/store/persistStore'
import { itemBy, removeArrayItemsMatched } from '@/utils/generalUtils'
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
        ({ noteId, speeches: [], user: userInfo, createAt: Date.now() } as Note)
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
        contentText,
        createAt: Date.now()
      }
      note.speeches.push(speech)
      if (firstSpeech) {
        userNotes.unshift(note)
      }
    },
    editSpeech(speechId: string) {
      const note = currentNote.value
      if (!note) return
      const speech = note.speeches.find(itemBy({ speechId }))
      if (!speech) return
      const text = window.prompt('コメント', speech.contentText)
      if (text && text !== speech.contentText) {
        if (text.length > textCaps.speechContentText) {
          window.alert(`文字数が制限を超えています。`)
        } else {
          speech.contentText = text
        }
      }
    },
    deleteSpeech(speechId: string) {
      const note = currentNote.value
      if (!note) return
      const ok = window.confirm(`発言を削除します。よろしいですか?`)
      if (ok) {
        removeArrayItemsMatched(note.speeches, itemBy({ speechId }))
      }
    }
  }

  return {
    currentNoteId,
    userInfo,
    allNotes,
    currentNote,
    ...actions
  }
})
