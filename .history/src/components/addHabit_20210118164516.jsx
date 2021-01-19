import React, { Component } from 'react';

class AddHabit extends Component {
    inputRef = React.createRef();
    addHabbit = () => {
        
        this.props.onAddHabbit(this.inputRef.current.value);
        this.inputRef.current.reset();

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