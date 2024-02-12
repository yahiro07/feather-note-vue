<script setup lang="ts">
import ButtonPrimary from '@/components/atoms/ButtonPrimary.vue'
import PanelHeader from '@/components/atoms/PanelHeader.vue'
import NoteEditor from '@/components/templates/NoteEditor.vue'
import NoteTimeline from '@/components/templates/NoteTimeline.vue'
import { useAppStore } from '@/store/appStore'

const store = useAppStore()
</script>

<template>
  <main class="fc-home-view">
    <div class="column left-column">
      <PanelHeader icon-spec="fluent:timeline-24-regular" header-text="ノート一覧">
        <template v-slot:ui-right-part>
          <ButtonPrimary icon-spec="bxs:edit" text="作成" @click="store.createNote" />
        </template>
      </PanelHeader>
      <NoteTimeline :notes="store.notes" @select-note="store.selectNote" />
    </div>
    <div class="column">
      <PanelHeader icon-spec="ph:chat-text" header-text="ノート詳細" />
      <NoteEditor
        :note="store.currentNote"
        v-if="store.currentNote"
        @create-speech="store.createSpeech"
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
