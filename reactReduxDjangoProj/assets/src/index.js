// Application's entry point: index.js->routes.js->App.js
// eslint purpose see configureStore.js
/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

render (
  <App/>,
  document.getElementById('main-app')
);

