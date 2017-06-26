// This component handles the App template used on every page.
// We need a parent component that houses any markup that we want to display on every page, such as a header or a footer. Typically call this component App.js, but you could call it template or layout if you prefer.
import React from 'react';
import Routes from './Routes';

class App extends React.Component {
  render () {
    return (
      <div className="app-container">
        <p>Header here...</p>
        <Routes/>
      </div>
    );
  }
}

export default App;
