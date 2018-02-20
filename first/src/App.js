import React, { Component } from 'react';

import './App.css';
import Hello from './components/hello'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          
          <h1>Welcome to React</h1>
        </header>
        <Hello/>
      </div>
    );
  }
}

export default App;
