import React, { Component } from 'react';

class AddHabit extends Component {
    addHabbit = () => {
        this.props.onAddHabit();

    };

    render() {
        return (
            <>
                <input className="add-input"></input>
                <button className="add-button" onClick={this.addHabbit}>Add</button>
            </>
        );
    }
}

export default AddHabit;