import React, { Component } from 'react';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <h3>Player Name: {this.props.name}</h3>
                {/* Use onClick event listener and using this.props reference the function in the parent to run */}
                <button onClick={this.props.addToScorecallBack}>Add to Score</button>
            </div>
        );
    }
}

export default Player;