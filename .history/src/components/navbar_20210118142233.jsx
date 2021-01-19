import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <header className  ="navbar">
                <i className="fas fa-leaf navbar-logo"></i>
                <h1>Habit Tracker</h1>
                <span className = 'navbar-count'></span>
            </header>
        );
    }
}

export default Navbar;