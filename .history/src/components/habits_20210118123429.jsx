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
        this.state.hhh.map( item => (
                       
            console.log(item)
        ));
        
        return (
            <ul>
                {
                    this.state.hhh.map( habit => (
                       
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