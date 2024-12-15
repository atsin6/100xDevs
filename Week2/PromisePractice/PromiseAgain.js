// 15 Dec, 2024

// Q: Write code that
// logs hi after 1 second
// logs hello 3 seconds after step 1
// logs hello there 5 seconds after step 2

// Solution 1: Callbackhell
// setTimeout(() => {
//     console.log("Hi");
//     setTimeout(() => {
//         console.log("Hello");
//         setTimeout(()=>{
//             console.log("Callback Hell")
//         }, 5000);
//     },3000);
// }, 1000);

// Solution 2: 
// function step3(){
//     console.log("Callback hell");
// }

// function step2(){
//     console.log("Hello");
//     setTimeout(step3, 5000);
// }

// function step1(){
//     console.log("Hi");
//     setTimeout(step2, 3000);
// }

// setTimeout(step1, 1000);

// solution 3: Promisified V1 with Callback hell
function setTimeoutPromisified(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve, ms);
    });
}

setTimeoutPromisified(1000).then(()=>{
    console.log("hi");
    setTimeoutPromisified(3000).then(()=>{
        console.log("Hello");
        setTimeoutPromisified(5000).then(()=>{
            console.log("Callback Hell with Promises");
        })
    });
})

// Solution 4: Promisified V2
setTimeoutPromisified(1000).then(()=>{
    console.log("Hi");
    return setTimeoutPromisified(3000);
}).then(()=>{
    console.log("Hello");
    return setTimeoutPromisified(5000);
}).then(()=>{
    console.log("Callback Hell with promises")
});

// Solution 5: Async Await Syntax
async function solve(){
    await setTimeoutPromisified(1000);
    console.log("Mai");
    await setTimeoutPromisified(3000);
    console.log("hoon");
    await setTimeoutPromisified(5000);
    console.log("Don");
}
solve();