import React, { Component } from 'react';

class Habit extends Component {
    render() {
        return (
          <>
            <span className="habit-name">Reading</span>
            <span className="habit-count">8</span>
            <button>
                <i className="fas fa-flus-square"></i>
            </button>

          </>
        );
    }
}

export default Habit;