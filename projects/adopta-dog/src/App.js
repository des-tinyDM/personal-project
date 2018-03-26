import React, { Component } from 'react';

import './App.css';
import Header from './components/Header/Header'
import AdoptADog from './components/AdoptADog/AdoptADog'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AdoptADog/>
      </div>
    );
  }
}

export default App;
