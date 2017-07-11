import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import LoadingDots from '../common/Loadingdots';

const HeaderContent = ({loading, onLogout}) => {
  return (
    <div className="app-header">
      <div className="logout" onClick={onLogout}>Logout</div>
      {loading && <div className="apiloading"><LoadingDots interval={100} dots={20}/></div>}
    </div>
  );
};

HeaderContent.propTypes = {
  loading: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired
};

export default HeaderContent;
