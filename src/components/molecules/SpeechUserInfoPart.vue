<script setup lang="ts">
import type { UserInfo } from '@/common/types'
import AvatarIcon from '@/components/atoms/AvatarIcon.vue'

defineProps<{ user: UserInfo }>()
</script>

<template>
  <div class="fc-speech-user-info-part">
    <AvatarIcon :avatar-url="user.avatarUrl" :size="36" />
    <span class="user-name">
      {{ user.userName }}
    </span>
  </div>
</template>

<style scoped lang="scss">
.fc-speech-user-info-part {
  display: flex;
  gap: 8px;
  align-items: center;

  > .user-name {
    font-weight: var(--weight-bold);
  }
}
</style>
