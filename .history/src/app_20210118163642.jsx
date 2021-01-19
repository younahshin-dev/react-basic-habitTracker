
import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';
import AddHabit from './components/addHabit';

class App extends Component {
  state = {
      habits: [
          {id: 1, name: 'Reading', count: 0},
          {id: 2, name: 'Running', count: 0},
          {id: 3, name: 'Coding', count: 0},
      ],
      

  };

  handleIncrement = (habit) =>{
      
      const habits = [...this.state.habits];
      const index = habits.indexOf(habit);
      habits[index].count ++;
      this.setState({habits});
  };

  handleDecrement = (habit) =>{
      const habits = [...this.state.habits];
      const index = habits.indexOf(habit);
      const count = habits[index].count-1;
      habits[index].count = count < 0 ? 0 : count;
      this.setState({habits});
  };

  handleDelete = (habit) =>{
      const habits = this.state.habits.filter(habit => habit.id !== habit.id);
      this.setState({habits});
  };

  handleAddHabit = (inputhabit) => {
    const nextId =  Math.max(...this.state.habits.map( habit => habit.id), 0) +1;
    const obj = {
      id:nextId,
      name: inputhabit,
      count: 0,
    }
     const habits = [...this.state.habits ,{id:nextId,
      name: inputhabit,
      count: 0}];
     habits.push(obj);
     console.log(`habits : ${habits}`);
     this.setState({habits});

  };

  render() {
    return (
      <>
        <Navbar totalCount = {this.state.habits.filter(habit => habit.count > 0).length}/>
        <AddHabit habits = {this.state.habits} onAddHabbit={this.handleAddHabit}/>
        <Habits habits={this.state.habits}
        onIncrement={this.handleIncrement} 
        onDecrement={this.handleDecrement} 
        onDelete={this.handleDelete}
        />
        <button className="habits-reset">Reset All</button>

      </>
    );
  }

}

export default App;
