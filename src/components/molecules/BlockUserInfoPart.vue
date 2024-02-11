<script setup lang="ts">
import type { UserInfo } from '@/common/applicationData'
import AvatarIcon from '@/components/atoms/AvatarIcon.vue'

defineProps<{ user: UserInfo }>()
</script>

<template>
  <div class="fc-block-user-info-part">
    <AvatarIcon :avatar-url="user.avatarUrl" :size="36" />
    <span>
      {{ user.userName }}
    </span>
  </div>
</template>

<style scoped lang="scss">
.fc-block-user-info-part {
  display: flex;
  gap: 8px;
  align-items: center;
}
</style>
