import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.login, action) {
  let copy;
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
      copy = Object.assign({}, state.login);
      copy.username = action.response.username;
      return copy;
    case types.LOG_OUT_SUCCESS:
      return {username: '', password: ''};
    default: // default is useful here
      return state;
  }
}
