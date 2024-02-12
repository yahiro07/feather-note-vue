<script setup lang="ts">
import { type UserInfo } from '@/common/applicationData'
import { textCaps } from '@/common/constants'
import ButtonPrimary from '@/components/atoms/ButtonPrimary.vue'
import SpeechUserInfoPart from '@/components/molecules/SpeechUserInfoPart.vue'
import { checkStringLength } from '@/utils/textHelper'
import { computed, ref } from 'vue'

defineProps<{ user: UserInfo }>()

const emit = defineEmits<{
  (e: 'submit', contentText: string): void
}>()

const contentText = ref('')

const canSubmit = computed(() => checkStringLength(contentText.value, 1, textCaps.blockContentText))

const lengthsText = computed(() => `${contentText.value.length} / ${textCaps.blockContentText}`)

function submitComment() {
  if (canSubmit.value) {
    emit('submit', contentText.value)
    contentText.value = ''
  }
}
</script>

<template>
  <div class="fc-speech-edit-form">
    <div class="header-row">
      <SpeechUserInfoPart :user="user" class="user-info-part" />
      <span class="lengths"> {{ lengthsText }} </span>
      <ButtonPrimary text="投稿" @click="submitComment" :disabled="!canSubmit" />
    </div>
    <div class="content-row">
      <textarea
        placeholder="コメントを追加"
        :value="contentText"
        @input="(e) => (contentText = (e.target as HTMLTextAreaElement)!.value)"
      />
    </div>
    <!-- ボタンを下に表示するパターン -->
    <div class="bottom-row" v-if="false">
      <ButtonPrimary text="投稿" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.fc-speech-edit-form {
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
    margin-top: 8px;
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
      &::placeholder {
        color: var(--cl-gray-1);
      }
      &:focus {
        outline: solid 1px var(--cl-input-focus);
        border-bottom: none;
      }
    }
  }
  > .bottom-row {
    margin-top: 8px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
