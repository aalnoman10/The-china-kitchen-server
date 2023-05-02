const express = require('express');
const port = 5000;
const app = express();

const chefs = require('./data/chefs.json');

app.get('/', (req, res) => {
    res.send(chefs)
})

app.get('/:id', (req, res) => {
    const id = req.params.id;
    const selected = chefs.find(chef => chef.id === id)
    res.send(selected)
})

app.listen(port, () => {
    console.log(`server in run port ${port}`);
})