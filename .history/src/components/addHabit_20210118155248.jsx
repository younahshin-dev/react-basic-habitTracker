import React, { Component } from 'react';

class AddHabit extends Component {
    addHabbit = () => {
        console.log(document.querySelector('#addHabbitText'));
        this.props.onAddHabit(document.querySelector('#addHabbitText'));

    };

    render() {
        return (
            <>
                <input id="addHabbitText" className="add-input"></input>
                <button className="add-button" onClick={this.addHabit}>Add</button>
            </>
        );
    }
}

export default AddHabit;