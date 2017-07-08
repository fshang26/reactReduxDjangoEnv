import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import LoadingDots from '../common/Loadingdots';

const HeaderContent = ({loading, onLogout}) => {
  return (
    <div className="app-header">
      <nav>
        <NavLink exact to="/" activeClassName="active">home</NavLink>
        {" | "}
        <NavLink to="/courses" activeClassName="active">courses</NavLink>
        {" | "}
        <NavLink to="/about" activeClassName="active">about</NavLink>
        {loading && <LoadingDots interval={100} dots={20}/>}
      </nav>
      <div className="logout" onClick={onLogout}>Logout</div>
    </div>
  );
};

HeaderContent.propTypes = {
  loading: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired
};

export default HeaderContent;
