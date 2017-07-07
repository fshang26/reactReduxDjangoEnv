import * as types from './actionTypes';
import loginApi from '../api/loginApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function logoutSuccess() {
  return {type: types.LOG_OUT_SUCCESS}; // ES6 shorthand property name: course: course -> course
}

export function logout() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return loginApi.logout().then(() => {
      dispatch(logoutSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}
