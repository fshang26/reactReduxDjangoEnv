import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import CoursesPage from './course/CoursesPage';
import ManageCoursePage from './course/ManageCoursePage'; // eslint-disable-line import/no-named-as-default
import LoginPage from './login/LoginPage';
import NotFoundPage from './notfound/NotFoundPage';

const routes = [{
  path: '/',
  exact: true,
  main: HomePage
}, {
  path: '/login',
  exact: true,
  main: LoginPage
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
}, {
  main: NotFoundPage
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
