<script setup lang="ts">
defineProps<{ text: string }>()
const model = defineModel()
</script>

<template>
  <div class="fc-checkbox-line">
    <label>
      <input type="checkbox" v-bind="$attrs" v-model="model" />
      <span>{{ text }}</span>
    </label>
  </div>
</template>

<style scoped lang="scss">
.fc-checkbox-line {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
