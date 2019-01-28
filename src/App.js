import React, { Component } from 'react';
import './App.css';
import SquareHolder from './components/squareholder';

class App extends Component {
  constructor() {
    super()
    this.state = {
      letters: ["a", "b", "c", "d"]  
  }
}

  render() {
    return (
      <div className="App">
        <SquareHolder letters={[...this.state.letters]}  />
      </div>
    );
  }
}

export default App;
