import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return <div className="nav-buttons">
            <button className="button" onClick={this.props.prevCharacter}> Previous </button>
            <button className="button" onClick={this.props.nextCharacter}> Next </button>
        </div>
    }
}

export default NavBar;