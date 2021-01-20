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

// Complete the staircase function below.
function staircase(n) {
    let str  = '';
    for(let i=1;i<=n;i++){
        for(let j =n-i;j>0;j--){
            str = str.concat(" ")

        }
        for(let j=1;j<=i;j++){
            str = str.concat("#")
        }
        str = str.concat("\n")
    }
    console.log(str)

}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
