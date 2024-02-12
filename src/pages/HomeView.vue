<script setup lang="ts">
import NoteEditor from '@/features/NoteEditor.vue'
import NoteTimeline from '@/features/NoteTimeline.vue'
</script>

<template>
  <main class="fc-home-view">
    <div class="column left-column">
      <NoteTimeline />
    </div>
    <div class="column">
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
    padding: 16px;
  }
  > .left-column {
    border-right: solid 1px #ccc;
  }
}
</style>
