const express = require('express');
const ctrl = require('./Controller');
const app = express();
const port = 4000;

app.use(express.json());

app.get('/api/dbz', ctrl.getCharacter);
app.post('/api/dbz', ctrl.addCharacter);
app.delete('/api/dbz/:id', ctrl.deleteCharacter);
app.put('/api/dbz/:id', ctrl.updateCharacter);


app.listen( port, () => console.log(`Listening on Port: ${port}`));