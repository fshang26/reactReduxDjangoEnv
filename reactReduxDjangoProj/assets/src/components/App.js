// This component handles the App template used on every page.
// We need a parent component that houses any markup that we want to display on every page, such as a header or a footer. Typically call this component App.js, but you could call it template or layout if you prefer.
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import Header from './common/Header';

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className="app-container">
          <Header/>
          <Routes/>
        </div>
      </Router>
    );
  }
}

export default App;
