<script setup lang="ts">
import { iconSpecs } from '@/common/constants'
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
        <Icon :icon="iconSpecs.home" />
      </RouterLink>
      <RouterLink to="/settings">
        <Icon :icon="iconSpecs.settings" />
      </RouterLink>
      <RouterLink to="/about">
        <Icon :icon="iconSpecs.about" />
      </RouterLink>
    </nav>
    <AvatarIcon :avatar-url="store.userInfo.avatarUrl" :size="44" />
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
    @include flexVertical(8);

    > a {
      font-size: 32px;
      color: var(--cl-white);
      @include styleClickable;
    }
  }
}
</style>
