const express = require('express');
const connectDB = require('./db/connect');
const tasks = require('./routes/task');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.use('/api/v1/tasks', tasks);

app.get('/', (req, res) => {
    res.send('Welcome to backend app');
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not Found</h1>');
});

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {console.log(`Server is Listening on port ${port}...`)});
    }
    catch(error){
        console.log(error);
    }
}

start();
