import type { TextInputDialogParams } from '@/components/modals/TextInputDialog.vue'
import TextInputDialog from '@/components/modals/TextInputDialog.vue'
import { createPromiseDialog } from 'vue-promise-dialogs'
import ConfirmDialog, { type ConfirmDialogParams } from './ConfirmDialog.vue'

export const openConfirmDialog = createPromiseDialog<ConfirmDialogParams, boolean>(ConfirmDialog)

export const openTextInputDialog = createPromiseDialog<TextInputDialogParams, string>(
  TextInputDialog
)
