<script setup lang="ts">
defineProps<{ avatarUrl: string; size: number }>()
</script>

<template>
  <div class="fc-avatar-icon" :style="`width: ${size}px; height: ${size}px;`">
    <img :src="avatarUrl" alt="user avatar" />
  </div>
</template>

<style scoped lang="scss">
.fc-avatar-icon {
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 1px #000;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
