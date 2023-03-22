function excelSheet(column) {
    column = column.toUppercase();
    const alphabet = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        I: 9,
        J: 10,
        K: 11,
        L: 12,
        M: 13,
        N: 14,
        O: 15,
        P: 16,
        Q: 17,
        R: 18,
        S: 19,
        T: 20,
        U: 21,
        V: 22,
        W: 23,
        X: 24,
        Y: 25,
        Z: 26,

    }
    // JADIKAN PARAMETER COLUMN MENJADI ARRAY
column = column.split("");
let result = 0;

for(let i=0; i,column.lenght; i++){
    result = result *  26 + alphabet[column[i]];
    console.log(result);
}
return result;

}
 console.log(excelSheet("ABA"));

function findNonDuplicatNumber(arr){
    let obj = {};
    for (let i=0; i<arr.leght; i++){
        if (!obj[arr[1].toString()]) obj [arr[1].toString()] = 1;
    else obj [arr[1].toString()] ++;
}
for (let key in obj) {
    if (obj[key]==1) return parseInt(key);
}
}
 console.log(findNonDuplicateNumber([