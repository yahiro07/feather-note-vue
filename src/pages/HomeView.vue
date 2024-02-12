<script setup lang="ts">
import PanelHeader from '@/components/atoms/PanelHeader.vue'
import NoteEditor from '@/features/NoteEditor.vue'
import NoteTimeline from '@/features/NoteTimeline.vue'
</script>

<template>
  <main class="fc-home-view">
    <div class="column left-column">
      <PanelHeader icon-spec="fluent:timeline-24-regular" header-text="ノート一覧" />
      <NoteTimeline />
    </div>
    <div class="column">
      <PanelHeader icon-spec="ph:chat-text" header-text="ノート詳細" />
      <NoteEditor />
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
