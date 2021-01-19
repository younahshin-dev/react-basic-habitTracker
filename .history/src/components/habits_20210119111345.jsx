import React, { Component } from 'react';
import Habit from './habit';
import AddHabit from './addHabit';
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

    handleAddHabit = (inputhabit) => {
        const nextId =  Math.max(...this.state.habits.map( habit => habit.id), 0) +1;
      //const habits = [...this.state.habits ,{id:nextId,      name: inputhabit,      count: 0}];
      const habits = [...this.state.habits];
      habits.push({id:nextId,      name: inputhabit,      count: 0});   
      console.log(`habits : ${habits}`);
         this.setState({habits});
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