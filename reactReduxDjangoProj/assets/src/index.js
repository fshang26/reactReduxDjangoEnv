// eslint purpose see configureStore.js
/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/App';
import {loadCourses} from './actions/courseActions'; // called a named import
import {loadAuthors} from './actions/authorActions';
import './styles/styles.css';
import '../../node_modules/toastr/build/toastr.min.css';
import Routes from './components/Routes';

// When would you pass initial state to this configureStore call? If you're wanting to rehydrate your store using some separate state that's passed down from the server or stored in local storage, then this is a good place to do so.
const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render (
  <Provider store={store}>
    <Router>
      <div>
        <App/>
        <Routes/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('main-app')
);
