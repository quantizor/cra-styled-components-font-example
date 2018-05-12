import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import logo from './logo.svg';
import './App.css';

injectGlobal`
  @font-face {
    font-family: 'Lobster';
    src: url('/Lobster_1.3.otf') format('opentype');
  }

  .App-title {
    font-family: 'Lobster';
  }
`;

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
