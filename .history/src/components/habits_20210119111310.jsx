import React, { Component } from 'react';
import Habit from './habit';

import AddHabit from './components/addHabit';
class Habits extends Component {
    
    handleIncrement = (habit) =>{
      this.props.onIncrement(habit);    
    };
  
    handleDecrement = (habit) =>{
        this.props.onDecrement(habit);    
    };
  
    handleDelete = (habit) =>{
        this.props.onDelete(habit);    
    };

    render() {
        
        return (
            <>
                <AddHabit habits = {this.state.habits} onAddHabbit={this.handleAddHabit}/>
                <ul>
                    {
                        this.props.habits.map( habit => (
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
            </>
        );
    } 
   
}

export default Habits;