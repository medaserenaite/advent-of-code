// https://adventofcode.com/2021/day/2
const input = require("fs").readFileSync("2021/Day2/input.txt", "UTF-8").replace(/\r/g, "").split('\n')
const directions = input.map(x => x.split(" "))

//   P1 
let horizontalPos = 0
let depth = 0
directions.forEach(line => {
    if(line[0] === "forward"){
        horizontalPos+= parseInt(line[1])
    }
    if(line[0] === "down"){
        depth += parseInt(line[1])
    }
    if(line[0] === "up"){
        depth -= parseInt(line[1])
    }
    
});

console.log(`Part 1: ${horizontalPos*depth}`)

//  P2

// console.log(`Part 2: ${p2}`)