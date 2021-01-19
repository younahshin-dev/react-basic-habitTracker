
import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';
import AddHabit from './components/addHabit';

class App extends Component {
  state = {
    count : 0,
  };

  render() {
    return (
      <>
        <Navbar />
        <AddHabit />
        <Habits />
      </>
    );
  }

}

export default App;
