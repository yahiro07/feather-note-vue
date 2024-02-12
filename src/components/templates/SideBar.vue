<script setup lang="ts">
import AvatarIcon from '@/components/atoms/AvatarIcon.vue'
import { useAppStore } from '@/store/appStore'
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'

const store = useAppStore()
</script>

<template>
  <div class="fc-side-bar">
    <nav>
      <RouterLink to="/">
        <Icon icon="mdi:home" />
      </RouterLink>
      <RouterLink to="/about" v-if="false">
        <Icon icon="mdi:info-outline" />
      </RouterLink>
    </nav>
    <div class="users">
      <AvatarIcon :avatar-url="store.guestUser.avatarUrl" :size="44" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.fc-side-bar {
  width: 60px;
  background: var(--cl-side-bar);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>
