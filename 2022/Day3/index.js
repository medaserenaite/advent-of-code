// https://adventofcode.com/2022/day/3
const input = require("fs").readFileSync("2022/Day3/input.txt", "UTF-8").replace(/\r/g, "").split("\n")
// console.log(input)
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

//   P2
let part2priority = 0

for(let i=0; i<input.length; i+=3){

    let firstBackpack = input[i]
    let secondBackpack = input[i+1]
    let thirdBackpack = input[i+2]

    for(let j=0; j<firstBackpack.length; j++){
        if(secondBackpack.includes(firstBackpack[j]) && thirdBackpack.includes(firstBackpack[j])){
            alphabetArr.forEach((el, i) => {
                if(firstBackpack[j] == el){
                    part2priority += (i + 1)
                } else if(firstBackpack[j] == el.toUpperCase()){
                    part2priority += (i + 27)
                }
            })
            break
        }
    }
}
console.log(`Part 2: ${part2priority}`)