import React from 'react';
import PropTypes from 'prop-types';
import {NavLink, Link, Redirect} from 'react-router-dom';
import LoadingDots from '../common/Loadingdots';

const SideNavContent = ({loading}) => {
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
      <div className="site-menu-item">
        {loading && <LoadingDots interval={100} dots={20}/>}
      </div>
      <span className="clearfix"></span>
    </div>
  );
};

SideNavContent.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default SideNavContent;

