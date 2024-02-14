<script setup lang="ts">
import ButtonPrimary from '@/components/atoms/ButtonPrimary.vue'
import DialogFrame from '@/components/atoms/DialogFrame.vue'

export type ConfirmDialogParams = { title?: string; text: string }

defineProps<{ params: ConfirmDialogParams }>()
const emit = defineEmits<{ resolve: [boolean] }>()

function close(result: boolean) {
  emit('resolve', result)
}
</script>

<template>
  <DialogFrame :title="params.title ?? '確認'" @close="close(false)">
    <div class="fc-confirm-dialog-content">
      <div class="message-row">{{ params.text }}</div>
      <div class="buttons-row">
        <ButtonPrimary text="OK" @click="close(true)" />
      </div>
    </div>
  </DialogFrame>
</template>

<style scoped lang="scss">
.fc-confirm-dialog-content {
  @include flexVertical(16);
  > .buttons-row {
    margin-top: auto;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
