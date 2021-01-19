import React, { PureComponent } from 'react';

class AddHabit extends PureComponent {
    inputRef = React.createRef();
  

    render() {
        console.log("addHabit");
        return (
            <form className="add-form">
                <input type="text" className="add-input" ref={this.inputRef} placeholder="Habit"></input>
                <button className="add-button" >Add</button>
            </form>
        );
    }
}

export default AddHabit;