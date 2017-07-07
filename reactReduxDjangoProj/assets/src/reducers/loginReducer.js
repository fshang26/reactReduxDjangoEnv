import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.userinfo, action) {
  switch (action.type) {
    case types.LOG_OUT_SUCCESS:
    default: // default is useful here
      return state;
  }
}
