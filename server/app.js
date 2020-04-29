const fs = require('fs');
const path = require('path');

const docPath = path.join(__dirname, 'db/index.txt');


let getIndex = function(callback){
    fs.readFile(path.join(docPath), 'utf8' ,(err, doc)=>{
        if(err){
            throw err;
        }
        callback(doc);
    });
}



let getText = function(data){
    let text = '';
    for(let key in data){
        text += data[key]+ ',';
    }
    return text.slice(0, text.length - 1);
}

let getJSON = function(data){
    let jsonValue = {};
    let values = data.body.userInput.split(',');
    for(let i = 0; i < values.length; ++i){
        let keyValue = values[i].split(':');
        let key = keyValue[0];
        let value = keyValue[1];
        jsonValue[key] = value;
    }
    return getText(jsonValue);
}


let handleInput = function(req, res) {
    let data = getJSON(req);
    getIndex((lastIndex)=>{
        lastIndex++;
        fs.writeFile(docPath, lastIndex, (err, doc)=>{
            fs.writeFile(path.join(__dirname, 'db/', lastIndex + '.txt'), data ,(err, doc)=>{
                console.log(path.join(__dirname, 'db/', lastIndex+'', '.txt'));
                res.status(201).redirect('/');
            })
        });
    });
}

module.exports = {
    handleInput: handleInput
}
    
