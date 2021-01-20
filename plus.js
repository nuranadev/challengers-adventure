'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    let positive = 0, negative = 0, zeros = 0;
    arr.forEach(el =>{
        if(el>0){
            positive+=1
        }
        else if(el<0){
            negative+=1;
        }
        else zeros+=1
    })
    
        console.log((positive/arr.length).toFixed(6))
        console.log((negative/arr.length).toFixed(6))
        console.log((zeros/arr.length).toFixed(6))
    
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
