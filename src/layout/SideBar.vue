<script setup lang="ts">
import type { PresetUserId } from '@/common/applicationData'
import AvatarIcon from '@/components/atoms/AvatarIcon.vue'
import { useAppStore } from '@/store/appStore'
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'

const store = useAppStore()

function handleAvatarClick(id: PresetUserId) {
  store.selectUser(id)
}
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
    <div class="users">
      <AvatarIcon
        v-for="user of store.allUsers"
        :key="user.userId"
        :avatar-url="user.avatarUrl"
        :size="44"
        @click="handleAvatarClick(user.userId)"
      />
    </div>
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
  padding: 12px 0 16px;

  > nav {
    display: flex;
    flex-direction: column;
    gap: 8px;
    > a {
      font-size: 32px;
      color: var(--cl-white);
      transition: var(--transition-common);
      &:hover {
        opacity: var(--hover-opacity-common);
      }
    }
  }

  > .users {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>
