import React from 'react';
import PropTypes from 'prop-types';
import HeaderContent from './HeaderContent';
import {connect} from 'react-redux';
import * as loginActions from '../../actions/loginActions';
import {bindActionCreators} from 'redux';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loggedin: this.props.loggedin
    };
    this.logout = this.logout.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedin !== this.state.loggedin) {
      this.setState({loggedin: nextProps.loggedin});
    }
  }

  logout() {
    delete localStorage.currentUser;
    this.props.actions.logout().then(() => {
      this.context.router.history.push('/login');
    });
  }
  render () {
    if (localStorage.currentUser || this.state.loggedin) {
      return (<HeaderContent
                loading={this.props.loading}
                onLogout={this.logout}
              />);
    }
    return null;
  }
}

Header.contextTypes = {
  router: PropTypes.object
};


Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  loggedin: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallInProgress > 0,
    loggedin: state.login.username !== ''
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
