const express = require('express');
const port = 5000;
const app = express();

const chefs = require('./data/chefs.json');

app.get('/', (req, res) => {
    res.send(chefs)
})

app.listen(port, () => {
    console.log(`server in run port ${port}`);
})