import React, { Component } from 'react';

class AddHabit extends Component {
    inputRef = React.createRef();
    addHabbit = () => {
        
        this.props.onAddHabbit(this.inputRef.current.value);
        this.inputRef.current.value='';

    };

    render() {
        return (
            <>
                <input type="text" className="add-input" ref={this.inputRef} placeholder="Habit"></input>
                <button className="add-button" onClick={this.addHabbit}>Add</button>
            </>
        );
    }
}

export default AddHabit;