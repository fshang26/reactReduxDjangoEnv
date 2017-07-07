import * as types from './actionTypes';
import loginApi from '../api/loginApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loginSuccess(response) {
  return {type: types.LOG_IN_SUCCESS, response}; // ES6 shorthand property name: course: course -> course
}

export function logoutSuccess() {
  return {type: types.LOG_OUT_SUCCESS}; // ES6 shorthand property name: course: course -> course
}

export function login(userinfo) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return loginApi.login(userinfo).then(response => {
      dispatch(loginSuccess(response.data));
      return response.data;
    }).catch(error => {
      throw(error);
    });
  };
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
