const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, 'db');

let users = [];

let documents = fs.readdirSync(target); 

documents.forEach(doc => {
    if(doc !== 'index.txt'){
        let res = fs.readFileSync(path.join(target, doc), 'utf8');
            users.push(res);
    }    
});

module.exports = users;