import React from 'react';
import PropTypes from 'prop-types';
import SideNavContent from './SideNavContent';
import {connect} from 'react-redux';

class SideNav extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loggedin: this.props.loggedin
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedin !== this.state.loggedin) {
      this.setState({loggedin: nextProps.loggedin});
    }
  }

  render () {
    if (localStorage.currentUser || this.state.loggedin) {
      return (
        <SideNavContent/>
      );
    }
    return null;
  }
}

SideNav.propTypes = {
  loggedin: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loggedin: state.login.username !== ''
  };
}

export default connect(mapStateToProps)(SideNav);
