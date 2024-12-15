//15 Dec 2024
// Creating Promisified fs.readFile function
const fs = require('fs');
function print(err, data){
    console.log(data);

}
function readFilePromisified(filepath, encoding="utf-8"){
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, encoding, (err, data)=>{
            if(err){
                // console.log(err);
                reject(err);
            }
            else{
                
                // console.log(data)
                resolve(data);
            }
        });
    })
}

// readFilePromisified("a.txt").then((data)=> {
//     console.log("File Read Successful: "+data);
// }).catch((err)=>{
//     console.log("File reading failed: "+err);
// })

async function readFileAsync(){
    const data = await readFilePromisified("a.txt");
    console.log("File Read Successful: "+data);
}
readFileAsync();