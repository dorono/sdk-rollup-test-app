import React, { Component } from 'react';
import {myNameIs, iLike} from 'sdk-rollup-test-lib';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.log(`${myNameIs('Doron')} and ${iLike('jazz music!')}`);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>{`${myNameIs('Doron')} and ${iLike('jazz music!')}`}</h1>
        </header>
      </div>
    );
  }
}

export default App;
