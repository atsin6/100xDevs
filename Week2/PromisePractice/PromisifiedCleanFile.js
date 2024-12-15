// 15 Dec, 2024

const fs = require('fs');

function CustomCleanFile(filepath){
    return new Promise((resolve, revert) => {
        fs.truncate(filepath, 0, (err) => {
            if(err) throw err;
            else{
                console.log(`File successfully cleaned.`);
            }
        });
    })
}

CustomCleanFile('a.txt');


