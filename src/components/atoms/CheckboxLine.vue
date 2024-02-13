<script setup lang="ts">
defineProps<{ text: string }>()

const emit = defineEmits<{
  checked: [boolean]
}>()
function handleChange(e: Event) {
  const checked = (e.target as HTMLInputElement).checked
  emit('checked', checked)
}
</script>

<template>
  <div class="fc-checkbox-line">
    <label>
      <input type="checkbox" v-bind="$attrs" @change="handleChange" />
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
