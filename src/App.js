import React from 'react';
import logo from './logo.svg';
import './App.css';
import First from './components/First';
import Second from './components/Second';

class App extends React.Component {
  render() {
    return (
      <div className="is-preload">
        <First/>
        <Second/>
      </div>
    )
  }
}
export default App;
