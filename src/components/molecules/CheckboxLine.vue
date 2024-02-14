<script setup lang="ts">
import ToggleSwitch from '@/components/atoms/ToggleSwitch.vue'

defineProps<{ text: string }>()
const model = defineModel()
</script>

<template>
  <label class="fc-checkbox-line">
    <ToggleSwitch v-bind="$attrs" v-model="model" />
    <span>{{ text }}</span>
  </label>
</template>

<style scoped lang="scss">
.fc-checkbox-line {
  @include flexAligned(4);
}
</style>
