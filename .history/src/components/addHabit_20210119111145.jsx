import React, { PureComponent } from 'react';

class AddHabit extends PureComponent {
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