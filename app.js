const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Welcome to backend app');
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not Found</h1>');
});



app.listen(port, () => {console.log(`Server is Listening on port ${port}...`)});
