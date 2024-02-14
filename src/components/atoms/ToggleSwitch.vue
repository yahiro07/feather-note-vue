<script setup lang="ts">
const model = defineModel()
</script>

<template>
  <label class="fc-toggle-switch">
    <input type="checkbox" v-bind="$attrs" v-model="model" />
    <div class="slider" />
  </label>
</template>

<style scoped lang="scss">
.fc-toggle-switch {
  position: relative;
  width: 48px;
  height: 26px;
  cursor: pointer;
  --transition-spec: 0.2s;

  > input {
    width: 0;
    height: 0;
    opacity: 0;
  }
  > .slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: #bbb;
    border-radius: 15px;
    transition: var(--transition-spec);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      margin: 2px;
      width: 22px;
      height: 22px;
      background: #fff;
      border-radius: 50%;
      transition: var(--transition-spec);
    }
  }

  > input:checked + .slider {
    background: var(--cl-button-primary);

    &::before {
      left: 22px;
    }
  }
}
</style>
