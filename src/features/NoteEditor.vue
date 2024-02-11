<script setup lang="ts">
import { exampleNote1, exampleUserInfo } from '@/common/applicationData'
import BlockUserInfoPart from '@/components/BlockUserInfoPart.vue'
import ButtonPrimary from '@/components/ButtonPrimary.vue'
import BlockCard from '@/features/BlockCard.vue'
import { ref } from 'vue'

const note = ref(exampleNote1)
const user = exampleUserInfo
</script>

<template>
  <div class="fc-note-editor">
    <div class="blocks">
      <BlockCard v-for="item of note.blocks" :key="item.id" :block="item" :user="user" />
    </div>
    <div class="edit-area">
      <div class="header-row">
        <BlockUserInfoPart :user="user" />
        <ButtonPrimary text="投稿" />
      </div>
      <div class="content-row">
        <textarea placeholder="コメントを追加" />
      </div>
      <!-- ボタンを下に表示するパターン -->
      <div class="bottom-row" v-if="false">
        <ButtonPrimary text="投稿" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.fc-note-editor {
  display: flex;
  flex-direction: column;
  gap: 16px;

  > .blocks {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  > .edit-area {
    background: var(--cl-white);
    padding: 16px;
    display: flex;
    flex-direction: column;
    box-shadow: var(--spec-shadow-light);
    > .header-row {
      display: flex;
      justify-content: space-between;
    }

    > .content-row {
      margin-top: 4px;
      display: flex;
      align-items: flex-start;
      gap: 4px;

      > textarea {
        flex-grow: 1;
        resize: none;
        min-height: 100px;
        padding: 8px 4px;
        border: none;
        outline: none;
        border-bottom: solid 1px var(--cl-light-gray-2);
      }
    }
    > .bottom-row {
      margin-top: 8px;
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
