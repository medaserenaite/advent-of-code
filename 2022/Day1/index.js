// https://adventofcode.com/2022/day/1
const input = require("fs").readFileSync("2022/Day1/input.txt", "UTF-8").replace(/\r/g, "").split("\n\n")

//   P1
const arr = input.map(i => {
    const numArr = i.split("\n").map(Number) //updates strings to numbers
    const y = numArr.reduce((prevVal, currentVal) => 
        prevVal +currentVal
    , 0)
    return y
})

let part1answer = Math.max(...arr)
console.log(`Part 1: ${part1answer}`)

//   P2
arr.sort((a, b) => b - a) // sorts arr in descending order
let arrCopy = arr.slice(0,3) //takes the first 3 array values (with largest numbers)
let part2answer = arrCopy.reduce((prevVal, currentVal) =>
    prevVal + currentVal
, 0)
console.log(`Part 2: ${part2answer}`)
