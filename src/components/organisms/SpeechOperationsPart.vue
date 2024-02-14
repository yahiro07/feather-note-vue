<script setup lang="ts">
import { useAppStore } from '@/store/appStore'
import { Icon } from '@iconify/vue'

const store = useAppStore()
defineProps<{ speechId: string }>()
</script>

<template>
  <div class="fc-speech-operations-part">
    <Icon icon="mdi:edit" class="icon" @click="store.editSpeech(speechId)" />
    <Icon icon="mdi:delete" class="icon" @click="store.deleteSpeech(speechId)" />
  </div>
</template>

<style scoped lang="scss">
.fc-speech-operations-part {
  position: absolute;
  top: 0;
  right: 0;
  margin: 8px;
  color: var(--cl-gray-1);
  @include flexAligned(4);
  > .icon {
    @include styleClickable;
  }
}
</style>
