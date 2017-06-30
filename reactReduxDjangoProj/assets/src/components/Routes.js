import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';

const routes = [{
  path: '/',
  exact: true,
  main: HomePage
}, {
  path: '/about',
  main: AboutPage
}];

const Routes = () => (
  <div>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.main}
      />
    ))}
  </div>
);

export default Routes;
