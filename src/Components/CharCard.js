import React, {Component} from 'react';

class List extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            race: "",
            highestLevel: "",
            specialAttack: "",
            editing: false
        }
    }
    
    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }   

    toggleEdit = () => {
        this.setState({
            editing: !this.state.editing
        })
    }


    render(){
        console.log(this.state.editing)
        return (
            <div className= "character-box">
            <h1 className="character-name">{this.props.character.name}</h1>
            <h1 className="character-race">Race: {this.props.character.race}</h1>
            <h1 className="character-level">Highest Level Achieved: {this.props.character.highestLevel}</h1>
            <h1 className="special"> Special Attack: {this.props.character.specialAttack} </h1>
            <button className="delete-btn" onClick={() => this.props.deleteCharacter(this.props.character.id)}> X </button>
            <button className="edit-btn" onClick={this.toggleEdit}> Edit </button>
            {this.state.editing ? (
                <div className="edit-inputs">
                    <input name="race" value={this.state.race} placeholder="Edit Character Race..." type="text" onChange={(e) => this.inputHandler(e)}></input>
                    <input name="highestLevel" value={this.state.highestLevel} placeholder="Edit Character Level..." type="text" onChange={(e) => this.inputHandler(e)}></input>
                    <input name="specialAttack" value={this.state.specialAttack} placeholder="Edit Character Special..." type="text" onChange={(e) => this.inputHandler(e)}></input>
                </div>
            ) : (null)}
            <button className="add-changes" onClick={ e => {this.props.updateCharacter(this.props.character.id, this.state.race, this.state.highestLevel, this.state.specialAttack )} }> Add Changes </button>
            </div>
        )
    }
}

export default List;








