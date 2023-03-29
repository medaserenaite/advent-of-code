// https://adventofcode.com/2021/day/3
const input = require("fs").readFileSync("2021/Day3/input.txt", "UTF-8").replace(/\r/g, "").split('\n')

//   P1 
let gammaRate = ''
let epsilonRate = ''
let sum0 = 0
let sum1 = 0
let digitArray = [...Array(input[0].length)].map(b => Array());

for(let i=0; i<input.length; i++){
    for(let j=0; j<input[0].length; j++){
        digitArray[j].push(input[i][j])
    }
}

digitArray.forEach(element => {
    sum0 = 0
    sum1 = 0
    element.forEach(d => {
        if(d === '0'){ sum0++}
        if(d === '1'){ sum1++}
    });

    if(sum0 > sum1){ 
        gammaRate += '0' 
        epsilonRate += '1'
    } else { 
        gammaRate += '1' 
        epsilonRate += '0'
    }
});

console.log(`Part 1: ${parseInt(gammaRate, 2)*parseInt(epsilonRate, 2)}`)

//  P2
// console.log(`Part 2: ${""}`)