import * as types from './actionTypes';

export const showModal = (modalType, modalProps) => ({type: types.SHOW_MODAL, modalType, modalProps});
export const hideModal = () => ({type: types.SHOW_MODAL});

/*
export function showModal(modalType, modalProps) {
  return {type: types.SHOW_MODAL, modalType, modalProps};
}

export function hideModal() {
  return {type: types.HIDE_MODAL};
}
*/
