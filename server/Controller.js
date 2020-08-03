const characters = require('./characters.json');
const e = require('express');
let id = 7;

module.exports = {
    getCharacter: (req, res) => {
        res.status(200).send(characters)
    },
    addCharacter: (req, res) => {
        const { name, race, highestLevel, specialAttack } = req.body;
        if(!name && !race && !highestLevel && !specialAttack) {
            res.status(404).send("Expected all fields to be filled!");
        } else {
            const newCharacter = {
                id,
                name, 
                race,
                highestLevel,
                specialAttack
            }
            characters.push(newCharacter);
            id++;
            res.status(200).send(characters);
        }
    },
    updateCharacter: (req, res) => {
        const {updatedCharacter} = req.body;
        const { id } = req.params;

        const index = characters.findIndex( elem => elem.id === +id);

        characters[index] = {...characters[index], ...updatedCharacter};
        res.status(200).send(characters);
    },
    deleteCharacter: (req, res) => {
        const {id} = req.params;
        const index = characters.findIndex( elem => elem.id === +id);
        characters.splice(index, 1);
        res.status(200).send(characters)
    }
}