<script setup lang="ts">
defineProps<{ text: string }>()
const model = defineModel()
</script>

<template>
  <label class="fc-checkbox-line">
    <input type="checkbox" v-bind="$attrs" v-model="model" />
    <span>{{ text }}</span>
  </label>
</template>

<style scoped lang="scss">
.fc-checkbox-line {
  @include flexAligned(2);
}
</style>
