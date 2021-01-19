import React, { Component } from 'react';

class AddHabit extends Component {
    const inputRef = React.createRef();
    addHabbit = () => {
        console.log(inputRef);
        this.props.onAddHabbit(inputRef.current.value);


    };

    render() {
        return (
            <>
                <input className="add-input" ref={this.inputRef} ></input>
                <button className="add-button" onClick={this.addHabbit}>Add</button>
            </>
        );
    }
}

export default AddHabit;