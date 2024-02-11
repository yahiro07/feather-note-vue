<script setup lang="ts">
import type { Block, UserInfo } from '@/common/applicationData'
import BlockUserInfoPart from '@/components/BlockUserInfoPart.vue'
defineProps<{ block: Block; user: UserInfo }>()
</script>

<template>
  <div class="fc-block-card">
    <div class="header-row">
      <BlockUserInfoPart :user="user" />
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
  box-shadow: var(--spec-shadow-light);
  padding: 16px;

  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
