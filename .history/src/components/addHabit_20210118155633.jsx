import React, { Component } from 'react';

class AddHabit extends Component {
    addHabbit = () => {
        console.log('진입');
        console.log(document.querySelector('.add-input'));
        this.props.onAddHabit(document.querySelector('#addHabbitText'));

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