import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Route
} from 'react-router-dom';

const Header = () => {
  return (
    <div className="app-header">
      <nav>
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        {" | "}
        <NavLink to="/about" activeClassName="active">About</NavLink>
      </nav>
    </div>
  );
};

export default Header;
