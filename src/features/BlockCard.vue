<script setup lang="ts">
import type { Block, UserInfo } from '@/common/applicationData'
import AvatarIcon from '@/components/AvatarIcon.vue'

defineProps<{ block: Block; user: UserInfo }>()
</script>

<template>
  <div class="fc-block-card">
    <div class="header-row">
      <AvatarIcon :avatar-url="user.avatarUrl" :size="40" />
      <span>
        {{ user.userName }}
      </span>
    </div>
    <div class="content-row">
      {{ block.contentText }}
    </div>
    <div class="footer-row"></div>
  </div>
</template>

<style scoped lang="scss">
.fc-block-card {
  background: var(--cl-white);
  box-shadow: 0 0 4px #0004;
  padding: 16px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  > .header-row {
    display: flex;
    gap: 8px;
    align-items: center;
  }
}
</style>
