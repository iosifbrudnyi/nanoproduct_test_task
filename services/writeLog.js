const fs = require('fs');

const log = "mazafaka"

function writeLog(data){
    fs.writeFile('.log.txt', data + "\n",{flag: "a"} , err => {
        if (err) {
            throw err; 
        }
    });
}

module.exports = writeLog