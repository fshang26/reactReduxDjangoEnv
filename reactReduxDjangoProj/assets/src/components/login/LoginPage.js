import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as loginActions from '../../actions/loginActions';
import {bindActionCreators} from 'redux';
import TextInput from '../common/TextInput';
import LoginContent from './LoginContent';
import axios from '../../api/api.config';
import cookie from 'react-cookies';


class Login extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      errors: {},
      userinfo: Object.assign({}, this.props.userinfo)
    };

    this.updateField = this.updateField.bind(this);
    this.login = this.login.bind(this);
  }

  updateField(event) {
    const field = event.target.name;
    let userinfo = Object.assign({}, this.state.userinfo);
    userinfo[field] = event.target.value;
    return this.setState({userinfo: userinfo});
  }

  login() {
    const csrftoken = cookie.load('csrftoken');
    axios.defaults.headers.post['X-CSRFToken'] = csrftoken;
    axios.defaults.headers.put['X-CSRFToken'] = csrftoken;
    axios.defaults.headers.patch['X-CSRFToken'] = csrftoken;

    this.props.actions.login(this.state.userinfo).then((response) => {
      localStorage.currentUser = JSON.stringify(response);
      this.context.router.history.push('/');
    });
  }

  render() {
    return (
      <LoginContent
        userinfo={this.state.userinfo}
        onChange={this.updateField}
        onSave={this.login}
        errors={this.state.errors}
      />
    );
  }
}

Login.contextTypes = {
  router: PropTypes.object,
};

Login.propTypes = {
  userinfo: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    userinfo: state.login
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
