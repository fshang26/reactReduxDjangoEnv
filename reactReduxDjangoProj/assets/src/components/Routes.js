import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <hr/>
      <Route exact path="/" component={HomePage}/>
      <Route path="/about" component={AboutPage}/>
    </div>
  </Router>
);

export default Routes;
