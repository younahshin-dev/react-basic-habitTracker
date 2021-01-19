import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            {id: 1, name: 'Reading', count: 0},
            {id: 2, name: 'Running', count: 0},
            {id: 3, name: 'Coding', count: 0},
        ],

    };

    handleIncrement = (habit) =>{
        console.log(`habitIncrement ${habit.name}`);
        this.setState(state => {
            const list = state.habits.map(item =>{
                if (habit.id === item.id) {
                    item.count = item.count + 1
                }
            } );
 
            return {
              list,
            };
        });
    };

    handleDecrement = (habit) =>{
        console.log(`habitDecrement ${habit.name}`);
    };

    handleDelete = (habit) =>{
        console.log(`habitDelete ${habit.name}`);
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