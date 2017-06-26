import React from 'react';
import {Link} from 'react-router-dom';

// TODO: (???) currently use class is because of hot reloading, can use stateless function component here.
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>SF Administration</h1>
        <p>React, Redux and Django SPA.</p>
        <Link to="/about">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
