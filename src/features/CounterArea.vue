<script setup lang="ts">
import { useCounterState } from '@/hooks/useCounterState'

const { count, increment } = useCounterState()
</script>

<template>
  <div class="fc_counter_area">
    <span class="foo">{{ count }}</span>
    <button @click="increment">inc</button>
  </div>
</template>

<style scoped lang="scss">
.fc_counter_area {
  > .foo {
    color: orange;
  }
}
</style>
