import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import LoadingDots from './LoadingDots';
import loginApi from '../../api/loginApi';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  logout() {
    loginApi.logout().then(() => {
      // $location.url('/login');
    });
  }

  render() {
    const {loading} = this.props;
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
        <div className="logout" onClick={this.logout}>Logout</div>
      </div>
    );
  }
}

/*const Header = ({loading}) => {
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
      <div className="logout">Logout</div>
    </div>
  );
};*/

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
