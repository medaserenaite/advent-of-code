// // https://adventofcode.com/2022/day/4 ***
const input = require("fs").readFileSync("2022/Day4/input.txt", "UTF-8").replace(/\r/g, "").split("\n")

let count = 0;
for (const line of input) {
const [[a1, b1], [a2, b2]] = line
    .split(',')
    .map((elf) => elf.split('-').map(Number));
if ((a1 <= a2 && b1 >= b2) || (a1 >= a2 && b1 <= b2)) {
    count++;
}
}
console.log(`Part 1: ${count}`)

let part2count = 0;
for (const line of input) {
const [[a1, b1], [a2, b2]] = line
    .split(',')
    .map((elf) => elf.split('-').map(Number));
    if ((a1 >= a2 && a1 <= b2) || (a2 >= a1 && a2 <= b1)) {
        part2count++;
    }
}
console.log(`Part 2: ${part2count}`)

