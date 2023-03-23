// https://adventofcode.com/2021/day/1
const input = require("fs").readFileSync("2021/Day1/input.txt", "UTF-8").replace(/\r/g, "").split("\n").map(Number)

//   P1 
let increases = 0

input.reduce((prevVal, currentVal, i, arr) => 
    currentVal > arr[i-1] ? increases++ : ''
, 0)

console.log(`Part 1: ${increases}`)

//  P2
let part2increases = 0

for(let i=0; i<input.length; i++){
    let current = input[i] + input[i+1] + input[i+2]
    let next = input[i+1] + input[i+2] + input[i+3]
    next > current ? part2increases++ : ''
}

console.log(`Part 2: ${part2increases}`)