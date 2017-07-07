// traditionally the rootReducer is called index.js
import {combineReducers} from 'redux';
import courses from './courseReducer'; // alias for accessing state.courses (property name looks good!!!) purpose
import authors from './authorReducer';
import login from './loginReducer';
import ajaxCallInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses, // ES6 shorthand property name for courses: courses
  authors,
  login,
  ajaxCallInProgress
});

export default rootReducer;
