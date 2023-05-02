const express = require('express');
const port = 5000;
const app = express();

app.get('/', (req, res) => {
    res.send('Server is run the Web Browser')
})

app.listen(port, () => {
    console.log(`server in run port ${port}`);
})