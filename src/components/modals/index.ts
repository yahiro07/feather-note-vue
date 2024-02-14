import { createPromiseDialog } from 'vue-promise-dialogs'
import ConfirmDialog, { type ConfirmDialogParams } from './ConfirmDialog.vue'

export const openConfirmDialog = createPromiseDialog<ConfirmDialogParams, boolean>(ConfirmDialog)
