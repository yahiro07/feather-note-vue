<script setup lang="ts">
import ButtonPrimary from '@/components/atoms/ButtonPrimary.vue'
import DialogFrame from '@/components/atoms/DialogFrame.vue'
import { ref } from 'vue'

export type TextInputDialogParams = {
  title?: string
  message: string
  default?: string
  multiLines?: boolean
}

const props = defineProps<{ params: TextInputDialogParams }>()
const emit = defineEmits<{ resolve: [string | null] }>()

const editText = ref(props.params.default ?? '')

function close(result: string | null) {
  emit('resolve', result)
}

function submit() {
  close(editText.value)
}
</script>

<template>
  <DialogFrame :title="params.title ?? '編集'" @close="close(null)">
    <div class="fc-confirm-dialog-content">
      <div class="message-row">{{ params.message }}</div>
      <div class="edit-row">
        <input type="text" v-model="editText" v-if="!params.multiLines" />
        <textarea v-model="editText" v-if="params.multiLines" />
      </div>
      <div class="buttons-row">
        <ButtonPrimary text="OK" @click="submit" />
      </div>
    </div>
  </DialogFrame>
</template>

<style scoped lang="scss">
.fc-confirm-dialog-content {
  @include flexVertical();

  > .edit-row {
    margin-top: 4px;
    @include flexVertical;
    > input,
    > textarea {
      padding: 4px;
      border: none;
      outline: none;
      border: solid 1px var(--cl-light-gray-2);
      &::placeholder {
        color: var(--cl-gray-1);
      }
      &:focus {
        border: solid 1px var(--cl-input-focus);
      }
    }
    > textarea {
      resize: none;
      min-height: 90px;
    }
  }
  > .buttons-row {
    margin-top: 12px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
