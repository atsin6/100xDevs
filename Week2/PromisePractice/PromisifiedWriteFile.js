// 15 Dec, 2024

const { rejects } = require('assert');
const fs = require('fs');

let data = "Your efforts are amazing.";
fs.writeFile('a.txt', data, 'utf-8', (err) => {
    if(err){
        console.log("File writing failed: "+err);
    }
    else{
        console.log("File writing successful.\nData after updation: "+fs.readFileSync('a.txt', 'utf-8'));
    }
})

let input = "Harkirat, Your cohort is amazing.";
function writeFilePromisified(filepath, input, encoding='utf-8'){
    return new Promise((resolve, reject) => {
        fs.writeFile(filepath, input, encoding, (err)=>{
            if(err){
                reject(`File written is not successfull due to the Error: ${err}`);
            }else{
                resolve(`File written successfully to ${filepath}`);
            }
        })
    })
}

//Promise-based approach
writeFilePromisified('a.txt', input)
    .then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(`Writing Failed \nError: ${err}`);
    });


//async-await approach
async function writeFileAsync(){
    const data = await writeFilePromisified('a.txt', input);
    console.log(data);
}
writeFileAsync();