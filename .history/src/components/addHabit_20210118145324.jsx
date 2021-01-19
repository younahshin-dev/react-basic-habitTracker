import React, { Component } from 'react';

class AddHabit extends Component {
    render() {
        return (
            <>
                <input className="add-input"></input>
                <button className="add-button" onClick={this.addHabit}>Add</button>
            </>
        );
    }
}

export default AddHabit;