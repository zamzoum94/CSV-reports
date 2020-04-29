const express = require('express');

const path = require('path');

const cors = require('cors');

const bodyParser = require('body-parser');
const app = express();

app.use(cors());

const handleRequests = require('./app');

let users = require('./createusers');


app.use(express.static(path.join(__dirname, '../client')));


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.status(200);
});

app.get('/output', (req, res)=>{
    res.status(200).json(users);
});


app.post('/userPost', (req, res) =>{
    handleRequests.handleInput(req, res);
});

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log('Server is listening...');
});