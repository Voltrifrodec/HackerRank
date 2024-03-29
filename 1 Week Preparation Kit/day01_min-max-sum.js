// https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let sorted = arr.sort((prev, curr) => prev - curr);
    let sumMin = 0, sumMax = 0;
    for(let i = 0; i < 4; i++) {
        sumMin += sorted[i];
        sumMax += sorted[sorted.length - i - 1];
    }
    console.log(sumMin, sumMax);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}