import React from 'react';
import PropTypes from 'prop-types';
import HeaderContent from './HeaderContent';
import {connect} from 'react-redux';

class Header extends React.Component {
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
      return (<HeaderContent loading={this.props.loading}/>);
    }
    return null;
  }
}

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  loggedin: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallInProgress > 0,
    loggedin: state.login.username !== ''
  };
}

export default connect(mapStateToProps)(Header);
