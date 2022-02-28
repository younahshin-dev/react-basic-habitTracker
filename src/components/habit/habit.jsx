import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  componentDidMount() {
    console.log('component did mount');
  }

  componentWillUnmount(){
    console.log('component will unmount');
  }

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li  className="habit">
        <span data-testid='habit-name' className="habit-name">{name}</span>
        <span data-testid='habit-count' className="habit-count">{count}</span>
        <button title="increseBtn"
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button title="decreseBtn"
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button title="deleteBtn"
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
