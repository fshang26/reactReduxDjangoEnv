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
        <SideNavContent
          loading={this.props.loading}
        />
      );
    }
    return null;
  }
}

SideNav.propTypes = {
  loading: PropTypes.bool.isRequired,
  loggedin: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallInProgress > 0,
    loggedin: state.login.username !== ''
  };
}

export default connect(mapStateToProps)(SideNav);
