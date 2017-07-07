import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    if (!localStorage.currentUser){
      this.context.router.history.push('/login');
    }
  }

  render() {
    return (
      <div className="page">
        <h1>SF Administration</h1>
        <p>React, Redux and Django SPA.</p>
        <Link to="/about">Learn more</Link>
        <span className="clearfix"></span>
      </div>
    );
  }
}

HomePage.contextTypes = {
  router: PropTypes.object
};

export default HomePage;
