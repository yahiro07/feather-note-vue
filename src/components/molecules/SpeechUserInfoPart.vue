<script setup lang="ts">
import type { UserInfo } from '@/common/types'
import AvatarIcon from '@/components/atoms/AvatarIcon.vue'

defineProps<{ user: UserInfo; sizeOverride?: number }>()
</script>

<template>
  <div class="fc-speech-user-info-part">
    <AvatarIcon :avatar-url="user.avatarUrl" :size="sizeOverride ?? 36" />
    <span class="user-name">
      {{ user.userName }}
    </span>
  </div>
</template>

<style scoped lang="scss">
.fc-speech-user-info-part {
  @include flexAligned(8);
  > .user-name {
    font-weight: var(--weight-bold);
  }
}
</style>
