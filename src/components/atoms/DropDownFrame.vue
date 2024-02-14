<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

import { ref } from 'vue'

const buttonRef = ref(null)
const panelRef = ref(null)
const isOpen = ref(false)

function close() {
  isOpen.value = false
}

function toggleOpen() {
  isOpen.value = !isOpen.value
}

onClickOutside(panelRef, close, { ignore: [buttonRef] })
</script>

<template>
  <div class="fc-dropdown-frame">
    <div ref="buttonRef" @click.stop="toggleOpen">
      <slot name="button-part" />
    </div>
    <div ref="panelRef" v-if="isOpen" @click="close">
      <slot name="panel-part" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.fc-dropdown-frame {
  position: relative;
}
</style>
