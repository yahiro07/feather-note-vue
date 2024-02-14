<script setup lang="ts">
import DropDownFrame from '@/components/atoms/DropDownFrame.vue'
import MenuPanel from '@/components/atoms/MenuPanel.vue'
import TextWithIcon from '@/components/atoms/TextWithIcon.vue'
import { useAppStore } from '@/store/appStore'
import { Icon } from '@iconify/vue'

const store = useAppStore()
</script>

<template>
  <DropDownFrame>
    <template v-slot:button-part>
      <Icon icon="ci:menu-duo-md" class="menu-button" />
    </template>
    <template v-slot:panel-part>
      <MenuPanel class="panel">
        <TextWithIcon icon="mdi:delete" text="削除" @click="store.deleteCurrentNote()" />
      </MenuPanel>
    </template>
  </DropDownFrame>
</template>

<style scoped lang="scss">
.menu-button {
  color: var(--cl-gray-2);
  font-size: 20px;
  @include styleClickable;
}

.panel {
  position: absolute;
  left: 0px;
}
</style>
