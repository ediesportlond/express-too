import express from 'express';
const PORT = 3033;
const app = express();
//treat all input user data as json
app.use(express.json());

import people from './data.js';

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
    <body> 
        <h1 style='color:blue; font-size: 72pt; text-align: center'>Eddie's API</h1>
    </body>`);
});

app.post('/people', (req, res) => {
    const newPerson = req.body;
    people.push(newPerson);
    res.send(people);
})

app.get('/people', (req, res) => {
    res.send(people);
})

app.listen(PORT, console.log(`Listening to http://localhost:${PORT}...`));