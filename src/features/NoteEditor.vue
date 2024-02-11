<script setup lang="ts">
import { exampleNote1, exampleUserInfo } from '@/common/applicationData'
import { textCaps } from '@/common/constants'
import ButtonPrimary from '@/components/atoms/ButtonPrimary.vue'
import BlockUserInfoPart from '@/components/molecules/BlockUserInfoPart.vue'
import BlockCard from '@/components/organisms/BlockCard.vue'
import { generateIdTimeSequential } from '@/utils/idGenerator'
import { checkStringLength } from '@/utils/textHelper'
import { computed, ref } from 'vue'

const note = ref(exampleNote1)
const user = exampleUserInfo

const contentText = ref('')

const canSubmit = computed(() => checkStringLength(contentText.value, 1, textCaps.blockContentText))

const lengthsText = computed(() => `${contentText.value.length} / ${textCaps.blockContentText}`)

function submitComment() {
  if (canSubmit.value) {
    note.value.blocks.push({
      id: generateIdTimeSequential(),
      contentText: contentText.value
    })
    contentText.value = ''
  }
}
</script>

<template>
  <div class="fc-note-editor">
    <div class="blocks">
      <BlockCard v-for="item of note.blocks" :key="item.id" :block="item" :user="user" />
    </div>
    <div class="edit-area">
      <div class="header-row">
        <BlockUserInfoPart :user="user" class="user-info-part" />
        <span class="lengths"> {{ lengthsText }} </span>
        <ButtonPrimary text="投稿" @click="submitComment" :disabled="!canSubmit" />
      </div>
      <div class="content-row">
        <textarea placeholder="コメントを追加" v-model="contentText" />
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
      align-items: center;
      gap: 16px;

      > .user-info-part {
        margin-right: auto;
      }
      > .lengths {
        color: var(--cl-gray-2);
      }
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
