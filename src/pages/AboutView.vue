<script setup lang="ts">
import AboutContent from '@/components/templates/AboutContent.vue'
</script>
<template>
  <div class="fc-about-view">
    <div class="narrower">
      <AboutContent />
    </div>
  </div>
</template>

<style scoped lang="scss">
.fc-about-view {
  display: flex;
  justify-content: center;
  height: 100%;
  overflow-y: scroll;
  > .narrower {
    flex-grow: 1;
    max-width: 800px;
  }
}
</style>
