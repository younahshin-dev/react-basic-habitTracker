import React, { Component } from 'react';

class Habits extends Component {
    state = {
        habits: [
            {name: "Reading", count: 0},
            {name: "Running", count: 0},
            {name: "Coding", count: 0},
        ],
    };
    render() {
        return (
            <ul>
                {this.state.habits}
            </ul>
        );
    }
    state = {
        habits: [{        },
        {        },{        },],
    };
}

export default Habits;