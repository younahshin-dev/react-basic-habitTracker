import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        hhh: [
            {name: 'Reading', count: 0},
            {name: 'Running', count: 0},
            {name: 'Coding', count: 0},
        ],
    };

    render() {
        this.state.habits.map( habit => (
                       
            console.log(habit)
        ));
        
        return (
            <ul>
                {
                    this.state.habits.map( habit => (
                       
                        <Habit habit={habit} />
                    ))
                }
                
            </ul>
        );
    }
    state = {
        habits: [{        },
        {        },{        },],
    };
}

export default Habits;