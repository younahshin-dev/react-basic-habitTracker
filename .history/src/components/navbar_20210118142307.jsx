import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <header className  ="navbar">
                <i className="fas fa-leaf navbar-logo"></i>
                <apan>Habit Tracker</apan>
                <span className = 'navbar-count'>0</span>
            </header>
        );
    }
}

export default Navbar;