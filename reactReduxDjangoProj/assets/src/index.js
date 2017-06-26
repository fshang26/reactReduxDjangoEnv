// Application's entry point: index.js->routes.js->App.js
// eslint purpose see configureStore.js
/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import './styles/styles.css';

render (
  <App/>,
  document.getElementById('main-app')
);

