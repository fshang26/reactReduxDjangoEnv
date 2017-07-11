// eslint purpose see configureStore.js
/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/header/Header';
import {loadCourses} from './actions/courseActions'; // called a named import
import {loadAuthors} from './actions/authorActions';
import './styles/style.scss';
import Routes from './components/Routes';
import SideNav from "./components/sidenav/SideNav";
import '../../node_modules/toastr/build/toastr.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

// When would you pass initial state to this configureStore call? If you're wanting to rehydrate your store using some separate state that's passed down from the server or stored in local storage, then this is a good place to do so.
const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render (
  <Provider store={store}>
    <Router>
      <div className="react-root">
        <Header/>
        <SideNav/>
        <Routes/>
        <span className="clearfix"></span>
      </div>
    </Router>
  </Provider>,
  document.getElementById('main-app')
);
