import React, {Component} from 'react';

class AddCharacter extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            race: "",
            highestLevel: "",
            specialAttack: ""
        }
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }   

   
    render() {
        return (
      
                <div className="addCharacter-inputs">
                    <input className="add-inputs" name="name" value={this.state.name} type="text" placeholder="Add Character name..." 
                    onChange={(e) => this.inputHandler(e)}></input>
                    <input className="add-inputs" name="race" value={this.state.race} type="text" placeholder="Add Character Race..." 
                    onChange={(e) => this.inputHandler(e)}></input>
                    <input className="add-inputs" name="highestLevel" value={this.state.highestLevel} type="text" placeholder="Add Character Level..." 
                    onChange={(e) => this.inputHandler(e)}></input>
                    <input className="add-inputs" name="specialAttack" value={this.state.specialAttack} type="text" placeholder="Add Special Attack..." 
                    onChange={(e) => this.inputHandler(e)}></input>
                    <button className="add-button" onClick={ (e) => this.props.addCharacter(e, this.state.name, this.state.race, this.state.highestLevel, this.state.specialAttack)}> Add </button>
                </div>
            ) 
        
    }
}

export default AddCharacter;


