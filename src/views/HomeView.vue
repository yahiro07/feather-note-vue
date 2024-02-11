<script setup lang="ts">
import CounterArea from '@/features/CounterArea.vue'
</script>

<template>
  <main class="fc-home-view">
    <div class="column left-column">home view</div>
    <div class="column">
      <CounterArea />
    </div>
  </main>
</template>

<style scoped lang="scss">
.fc-home-view {
  height: 100%;
  display: flex;
  > .column {
    width: 50%;
    padding: 16px;
  }
  > .left-column {
    border-right: solid 1px #ccc;
  }
}
</style>
