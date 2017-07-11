import React from 'react';
import {NavLink} from 'react-router-dom';

const SideNavContent = () => {
  return (
    <div className="app-sitenav">
      <div className="site-menu-item">
        <NavLink exact to="/" activeClassName="active">home</NavLink>
      </div>
      <div className="site-menu-item">
        <NavLink to="/courses" activeClassName="active">courses</NavLink>
      </div>
      <div className="site-menu-item">
        <NavLink to="/about" activeClassName="active">about</NavLink>
      </div>
      <span className="clearfix"></span>
    </div>
  );
};

export default SideNavContent;

