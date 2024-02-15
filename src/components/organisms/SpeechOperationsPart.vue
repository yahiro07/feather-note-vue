<script setup lang="ts">
import DropDownFrame from '@/components/atoms/DropDownFrame.vue'
import MenuPanel from '@/components/atoms/MenuPanel.vue'
import TextWithIcon from '@/components/atoms/TextWithIcon.vue'
import { useAppStore } from '@/store/appStore'
import { Icon } from '@iconify/vue'

const store = useAppStore()
defineProps<{ speechId: string }>()
</script>

<template>
  <DropDownFrame>
    <template v-slot:button-part>
      <Icon icon="ci:menu-duo-md" class="menu-button" />
    </template>
    <template v-slot:panel-part>
      <MenuPanel class="panel">
        <TextWithIcon icon="mdi:edit" text="編集" @click="store.editSpeech(speechId)" />
        <TextWithIcon icon="mdi:delete" text="削除" @click="store.deleteSpeech(speechId)" />
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
  z-index: $z-order-menu;
  right: 0px;
}
</style>
