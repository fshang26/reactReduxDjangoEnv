import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import LoadingDots from '../common/Loadingdots';
import * as loginActions from '../../actions/loginActions';
import {bindActionCreators} from 'redux';

class HeaderContent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.logout = this.logout.bind(this);
  }

  logout() {
    delete localStorage.currentUser;
    this.props.actions.logout().then(() => {
      this.context.router.history.push('/login');
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

HeaderContent.contextTypes = {
  router: PropTypes.object
};

HeaderContent.propTypes = {
  loading: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContent);
