<script setup lang="ts">
defineProps<{ title: string }>()
defineEmits<{ close: [] }>()
</script>

<template>
  <div class="fc-dialog-frame" @click="$emit('close')">
    <div class="panel" @click.stop="">
      <div class="title-bar">{{ title }}</div>
      <div class="content-part">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.fc-dialog-frame {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  @include flexCentered();
  background: #0002;

  > .panel {
    background: var(--cl-white);
    min-width: 360px;
    border: solid 1px var(--cl-primary);
    box-shadow: var(--spec-shadow-light);

    > .title-bar {
      @include flexAligned();
      background: var(--cl-primary);
      color: var(--cl-white);
      font-weight: var(--weight-bold);
      height: 34px;
      padding: 0 8px;
    }

    > .content-part {
      padding: 12px;
    }
  }
}
</style>
