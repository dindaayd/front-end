const v = new Promise((resolve, reject)=>{
    let iError = false;
    if (isError)reject("contoh error");

    resolve("contoh sukses");
})

tryPromise.then(()=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log('finally done');
});
console.log(tryPromise);


const tryPromise = new Promise((reolve, reject)=>{
    let i Error = false;
    if (isError) reject("error message");
    resolve("result sukses");
})

const asynAwait = () => {
    console.log('satu');
    
    await tryPromise
    .then((result)=>)
} 