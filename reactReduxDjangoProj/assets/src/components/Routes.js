/*eslint-disable react/jsx-no-bind */
import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import CoursesPage from './course/CoursesPage';
import ManageCoursePage from './course/ManageCoursePage'; // eslint-disable-line import/no-named-as-default
import LoginPage from './login/LoginPage';
import NotFoundPage from './notfound/NotFoundPage';
import SamplePage from './sample/SamplePage';

const Routes = () => (
  <div className="app-content">
    <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/login" exact component={LoginPage}/>
      <Route path="/courses" exact render={(props) => (localStorage.currentUser ? (<CoursesPage {...props}/>) : (<Redirect to="/login"/>))}/>
      <Route path="/course" exact render={(props) => (localStorage.currentUser ? (<ManageCoursePage {...props}/>) : (<Redirect to="/login"/>))}/>
      <Route path="/course/:id" render={(props) => (localStorage.currentUser ? (<ManageCoursePage {...props}/>) : (<Redirect to="/login"/>))}/>
      <Route path="/about" exact render={(props) => (localStorage.currentUser ? (<AboutPage {...props}/>) : (<Redirect to="/login"/>))}/>
      <Route path="/sample" exact render={(props) => (localStorage.currentUser ? (<SamplePage {...props}/>) : (<Redirect to="/login"/>))}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </div>
);

export default Routes;
