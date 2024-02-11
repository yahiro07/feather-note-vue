<script setup lang="ts">
import { exampleUserInfo } from '@/common/applicationData'
import AvatarIcon from '@/components/AvatarIcon.vue'
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'

const { avatarUrl } = exampleUserInfo
</script>

<template>
  <div class="fc-side-bar">
    <nav>
      <RouterLink to="/">
        <Icon icon="mdi:home" />
      </RouterLink>
      <RouterLink to="/about">
        <Icon icon="mdi:info-outline" />
      </RouterLink>
    </nav>
    <AvatarIcon :avatar-url="avatarUrl" :size="44" />
  </div>
</template>

<style scoped lang="scss">
.fc-side-bar {
  width: 60px;
  background: var(--cl-side-bar);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 6px #0008;
  padding: 16px 0;

  > nav {
    display: flex;
    flex-direction: column;
    gap: 8px;
    > a {
      font-size: 32px;
      color: var(--cl-white);
      transition: all 0.6s;
      &:hover {
        opacity: 0.7;
      }
    }
  }

  > .fc-avatar-icon {
    margin-top: auto;
  }
}
</style>
