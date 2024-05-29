// https://adventofcode.com/2023/day/1

// P1
const input = require("fs").readFileSync("input.txt", "UTF-8").replace(/\r/g, "").split("\n").map(String)

let arr = []

for(let i=0; i<input.length; i++){ // iterating one string blob at a time
    let numbers = []

    for(let j=0; j<input[i].length; j++){ //iterating one letter/number at a time
        if(!isNaN(input[i][j])){
            numbers.push(input[i][j])
        }
    }
    arr.push(parseInt(numbers[0] + numbers[numbers.length-1])) // sample [ 12, 38, 15, 77 ]
}

const sum = arr.reduce((ac, cv) => ac + cv, 0)
console.log(sum) //54338

