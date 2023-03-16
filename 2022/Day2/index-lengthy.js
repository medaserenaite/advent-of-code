// https://adventofcode.com/2022/day/2
const input = require("fs").readFileSync("2022/Day2/input.txt", "UTF-8").replace(/\r/g, "").split("\n")
/*
    A - rock - 1pt
    B - paper - 2pt
    C - scissors - 3pt

    X - rock - 1pt
    Y - paper - 2pt
    Z - scissors - 3pt

    0 - lost, 
    3 - draw, 
    6 - won
*/

//   P1
let totalScore = 0
input.forEach(i => {
    if(i[0] == "A" ){
        if(i[2] == "X"){ totalScore +=(1 + 3) } //draw
        else if(i[2] === "Y"){ totalScore +=(2 + 6) } //winning
        else if(i[2] === "Z"){ totalScore +=(3 + 0) } //losing
    }else if(i[0] === "B"){
        if(i[2] == "X"){ totalScore +=(1 + 0) } //losing
        else if(i[2] === "Y"){ totalScore +=(2 + 3) } //draw
        else if(i[2] === "Z"){ totalScore +=(3 + 6) } //winning
    }else if(i[0] == "C"){
        if(i[2] == "X"){ totalScore +=(1 + 6) } //winning
        else if(i[2] === "Y"){ totalScore +=(2 + 0) } //losing
        else if(i[2] === "Z"){ totalScore +=(3 + 3) } //draw
    }
})

console.log(`Part 1: ${totalScore}`)

//   P2
/*
    X - lose
    Y - draw
    Z - win
*/

let totalScore2 = 0
input.forEach(i => {
    if(i[0] == "A" ){
        if(i[2] === "X"){ 
            // need to lose - choose Z
            totalScore2 += (0 + 3)
        }
        else if(i[2] === "Y"){  
            // need to draw - choose X
            totalScore2 += (3 + 1)
        }
        else if(i[2] === "Z"){  
            // need to win - choose Y
            totalScore2 += (6 + 2)
        }
    }else if(i[0] == "B"){
        if(i[2] === "X"){ 
            // need to lose - choose X
            totalScore2 += (0 + 1)
        }
        else if(i[2] === "Y"){  
            // need to draw - choose Y
            totalScore2 += (3 + 2)
        }
        else if(i[2] === "Z"){  
            // need to win - choose Z
            totalScore2 += (6 + 3)
        }
    }else if(i[0] == "C"){
        if(i[2] === "X"){ 
            // need to lose - choose Y
            totalScore2 += (0 + 2)
        }
        else if(i[2] === "Y"){  
            // need to draw - choose Z
            totalScore2 += (3 + 3)
        }
        else if(i[2] === "Z"){  
            // need to win - choose X
            totalScore2 += (6 + 1)
        }
    }
})

console.log(`Part 2: ${totalScore2}`)
