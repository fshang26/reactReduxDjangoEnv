import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <div className="app-header">
      <nav>
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        {" | "}
        <NavLink to="/courses" activeClassName="active">Courses</NavLink>
        {" | "}
        <NavLink to="/about" activeClassName="active">About</NavLink>
        {loading && <LoadingDots interval={100} dots={20}/>}
      </nav>
    </div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
