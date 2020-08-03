import React, { Component } from 'react';
import axios from 'axios';
import './reset.css';
import './App.css';
import Header from './Components/Header';
import CharCard from './Components/CharCard';
import NavBar from './Components/NavBar'
import AddCharacter from './Components/AddCharacter';

class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      currentChar: 0
    }
    this.nextCharacter = this.nextCharacter.bind(this);
    this.prevCharacter = this.prevCharacter.bind(this);
    this.addCharacter = this.addCharacter.bind(this);
    this.deleteCharacter = this.deleteCharacter.bind(this);
    this.updateCharacter = this.updateCharacter.bind(this);
  }

  componentDidMount() {
    this.getCharacter();
  }

  getCharacter = () => {
    axios.get('/api/dbz').then( res => {
      this.setState({ characters: res.data })
    }).catch(err => console.log(err))
  }
  
  addCharacter = (e, name, race, highestLevel, specialAttack) => {
    axios.post('api/dbz', {name, race, highestLevel, specialAttack}).then(
      res => { this.setState({
        characters: res.data
      })}
    ).catch( err => console.log(err))
  }

  updateCharacter = (id, race, highestLevel, specialAttack) => {
    axios.put(`/api/dbz/${id}`, {updatedCharacter:{race, highestLevel, specialAttack}}).then(res => {
      this.setState({
        characters: res.data
      })
    }).catch(err => console.log(err))
  }

  deleteCharacter = (id) => {
    axios.delete(`api/dbz/${id}`).then(
      res => {
        this.setState({
          characters: res.data
        })
      }
    ).catch( err => console.log(err))
  }

  nextCharacter(event) {
    const currentChar = this.state.currentChar;
    if(currentChar === this.state.characters.length - 1) {
      event.preventDefault()
    } else {
      this.setState ({
        currentChar: currentChar + 1
      })
    }
  }
  
  prevCharacter(event) {
    const currentChar = this.state.currentChar;
    if(currentChar === 0) {
      event.preventDefault();
    } else {
      this.setState({
        currentChar: currentChar - 1
      })
    }
  }


  render() {
    const currentChar = this.state.currentChar;
    const charMap = this.state.characters.map( (character, index) => {
      if(index === currentChar) {
        return <CharCard key={character.id} character={character} deleteCharacter={this.deleteCharacter} updateCharacter={this.updateCharacter}/>
      }
    })
    return (
    <div>
      <Header />
      {charMap}
      <NavBar nextCharacter={this.nextCharacter} prevCharacter={this.prevCharacter}/>
      <AddCharacter addCharacter={this.addCharacter} />
    </div>
  );
  }
}

export default App;
