<script setup lang="ts">
import ButtonPrimary from '@/components/atoms/ButtonPrimary.vue'
import PanelHeader from '@/components/atoms/PanelHeader.vue'
import NoteOperationsPart from '@/components/organisms/NoteOperationsPart.vue'
import NoteEditor from '@/components/templates/NoteEditor.vue'
import NoteTimeline from '@/components/templates/NoteTimeline.vue'
import { useAppStore } from '@/store/appStore'
import { useSettingsStore } from '@/store/settingsStore'
import { nextTick, ref, watch } from 'vue'

const store = useAppStore()
const { userOptions } = useSettingsStore()

const refRightColumn = ref<HTMLDivElement | null>()

function scrollThreadToLatest() {
  nextTick(() => {
    const el = refRightColumn.value!
    const newPosition = userOptions.reverseThreadFlow ? 0 : el.scrollHeight
    el.scrollTop = newPosition
  })
}

watch(() => [store.currentNote, store.currentNote?.speeches.length], scrollThreadToLatest)
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
      <PanelHeader icon-spec="ph:chat-text" header-text="ノート詳細">
        <template v-slot:ui-left-part>
          <NoteOperationsPart v-if="store.currentNote && store.currentNote.speeches.length > 0" />
        </template>
      </PanelHeader>
      <NoteEditor v-if="store.currentNote" />
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
    @include flexVertical(8);
    overflow-y: scroll;
  }
  > .left-column {
    border-right: solid 1px #ccc;
  }
}
</style>
