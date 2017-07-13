import React from 'react';
import {NavLink} from 'react-router-dom';

const SideNavContent = () => {
  return (
    <div className="app-sitenav">
      <div className="site-menu-item">
        <i className="fa fa-home" aria-hidden="true"></i>
        <NavLink exact to="/" activeClassName="active">home</NavLink>
      </div>
      <div className="site-menu-item">
        <i className="fa fa-book" aria-hidden="true"></i>
        <NavLink to="/courses" activeClassName="active">courses</NavLink>
      </div>
      <div className="site-menu-item">
        <i className="fa fa-info-circle" aria-hidden="true"></i>
        <NavLink to="/sample" activeClassName="active">sample</NavLink>
      </div>
      <div className="site-menu-item">
        <i className="fa fa-info-circle" aria-hidden="true"></i>
        <NavLink to="/about" activeClassName="active">about</NavLink>
      </div>
      <span className="clearfix"></span>
    </div>
  );
};

export default SideNavContent;

