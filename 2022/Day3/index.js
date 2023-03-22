// https://adventofcode.com/2022/day/3
const input = require("fs").readFileSync("2022/Day3/input.txt", "UTF-8").replace(/\r/g, "").split("\n")

//  P1
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const alphabetArr = [...alphabet]
let prioritySum = 0

input.forEach(backpack => {
    let stringA = backpack.substring(0, backpack.length/2)
    let stringB = backpack.substring(backpack.length/2, backpack.length)
    
    for(let i=0; i<stringA.length; i++){
        if(stringB.includes(stringA[i])){
            let selected = stringA[i]

            alphabetArr.forEach((el, i) => {
                if(selected == el){
                    prioritySum += (i + 1)
                } else if(selected == el.toUpperCase()){
                    prioritySum += (i + 27)
                }
            })
            break
        }
    }
})
console.log(`Part 1: ${prioritySum}`)
