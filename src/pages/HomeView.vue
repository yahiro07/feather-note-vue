<script setup lang="ts">
import ButtonPrimary from '@/components/atoms/ButtonPrimary.vue'
import PanelHeader from '@/components/atoms/PanelHeader.vue'
import NoteEditor from '@/components/templates/NoteEditor.vue'
import NoteTimeline from '@/components/templates/NoteTimeline.vue'
import { useAppStore } from '@/store/appStore'
import { useSettingsStore } from '@/store/settingsStore'
import { nextTick, ref } from 'vue'

const store = useAppStore()
const { userOptions } = useSettingsStore()

const refRightColumn = ref<HTMLDivElement | null>()

function createSpeech(contentText: string) {
  store.createSpeech(contentText)
  nextTick(() => {
    const el = refRightColumn.value!
    if (userOptions.reverseThreadFlow) {
      el.scrollTop = 0
    } else {
      el.scrollTop = el.scrollHeight
    }
  })
}
</script>

<template>
  <main class="fc-home-view">
    <div class="column left-column">
      <PanelHeader icon-spec="fluent:timeline-24-regular" header-text="ノート一覧">
        <template v-slot:ui-right-part>
          <ButtonPrimary icon-spec="bxs:edit" text="作成" @click="store.createNote" />
        </template>
      </PanelHeader>
      <NoteTimeline />
    </div>
    <div class="column" ref="refRightColumn">
      <PanelHeader icon-spec="ph:chat-text" header-text="ノート詳細" />
      <NoteEditor
        :note="store.currentNote"
        :is-reverse-flow="userOptions.reverseThreadFlow"
        v-if="store.currentNote"
        @create-speech="createSpeech"
      />
    </div>
  </main>
</template>

<style scoped lang="scss">
.fc-home-view {
  height: 100%;
  display: flex;
  > .column {
    width: 50%;
    padding: 12px 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow-y: scroll;
  }
  > .left-column {
    border-right: solid 1px #ccc;
  }
}
</style>
