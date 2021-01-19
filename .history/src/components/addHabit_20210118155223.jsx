import React, { Component } from 'react';

class AddHabit extends Component {
    addHabbit = () => {
        console.log(documnet.querySelector('#addHabbitText'));
        this.props.onAddHabit(documnet.querySelector('#addHabbitText'));

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