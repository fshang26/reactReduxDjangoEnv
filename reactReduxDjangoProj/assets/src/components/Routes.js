import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import CoursesPage from './course/CoursesPage';
import ManageCoursePage from './course/ManageCoursePage'; // eslint-disable-line import/no-named-as-default

const routes = [{
  path: '/',
  exact: true,
  main: HomePage
}, {
  path: '/courses',
  exact: true,
  main: CoursesPage
}, {
  path: '/course',
  exact: true,
  main: ManageCoursePage
}, {
  path: '/course/:id',
  main: ManageCoursePage
}, {
  path: '/about',
  main: AboutPage
}];

const Routes = () => (
  <div>
    <Switch>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.main}
      />
    ))}
    </Switch>
  </div>
);

export default Routes;
