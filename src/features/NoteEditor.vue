<script setup lang="ts">
import { exampleNote1, exampleUserInfo } from '@/common/applicationData'
import BlockCard from '@/features/BlockCard.vue'

const note = exampleNote1
const user = exampleUserInfo
</script>

<template>
  <div class="fc-note-editor">
    <div class="blocks">
      <BlockCard v-for="item of note.blocks" :key="item.id" :block="item" :user="user" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.fc-note-editor {
  > .blocks {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
