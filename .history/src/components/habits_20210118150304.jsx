import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    
    handleIncrement = (habit) =>{
      TouchList.props.onIncrement(habit);    
    };
  
    handleDecrement = (habit) =>{
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count-1;
        habits[index].count = count < 0 ? 0 : count;
        this.setState({habits});
    };
  
    handleDelete = (habit) =>{
        const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({habits});
    };

    render() {
        
        return (
            <ul>
                {
                    this.state.habits.map( habit => (
                        <Habit 
                            key={habit.id} 
                            habit={habit} 
                            onIncrement={this.handleIncrement} 
                            onDecrement={this.handleDecrement} 
                            onDelete={this.handleDelete}
                        />
                    ))
                }
                
            </ul>
        );
    }
   
}

export default Habits;