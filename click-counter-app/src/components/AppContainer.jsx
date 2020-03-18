import React,{Component} from 'react';
import Player from './Player';

class AppContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            grandTotal: 0,
        }
    }

    //Create a call back function that can be passed down into the child to run whenever the button is clicked
    addToScorecallBack = () => {
        //change the current state by adding 1 to it when the button is clicked
        this.setState(
            {
                grandTotal: this.state.grandTotal + 1
            }
        )
    }

    render(){
        return(
            <div>
                <h1>Play the Game</h1>
                <h3>Total Score: {this.state.grandTotal}</h3>
                <Player name='Mary' addToScorecallBack={this.addToScorecallBack}/>
            </div>
        )
    }
}

export default AppContainer;