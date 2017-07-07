// This component handles the App template used on every page.
// We need a parent component that houses any markup that we want to display on every page, such as a header or a footer. Typically call this component App.js, but you could call it template or layout if you prefer.
import React from 'react';
import PropTypes from 'prop-types';
import Routes from './Routes';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends React.Component {
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
    return (
      <div className="app-container">
        {(localStorage.currentUser || this.state.loggedin) && <Header
          loading={this.props.loading}
        />}
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  loggedin: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallInProgress > 0,
    loggedin: state.login.username !== ''
  };
}

export default connect(mapStateToProps)(App);
