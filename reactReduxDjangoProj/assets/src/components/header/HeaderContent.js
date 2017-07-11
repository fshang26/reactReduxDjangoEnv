import React from 'react';
import PropTypes from 'prop-types';

const HeaderContent = ({loading, onLogout}) => {
  return (
    <div className="app-header">
      <div className="logout" onClick={onLogout}>Logout</div>
    </div>
  );
};

HeaderContent.propTypes = {
  onLogout: PropTypes.func.isRequired
};

export default HeaderContent;
