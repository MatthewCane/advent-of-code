import * as fs from "node:fs";

const input = fs.readFileSync("../input.txt", "utf-8").trim();

let codes = [];

for (let line of input.split("\n")) {
  let digits = [];
  for (let char of line.split("")) {
    if (!isNaN(Number(char))) {
      digits.push(char);
    }
  }
  if (digits.length == 1) {
    codes.push(Number(digits[0] + digits[0]));
  } else {
    codes.push(Number(digits[0] + digits[digits.length - 1]));
  }
}
console.log(codes.reduce((acc, curr) => acc + curr, 0));
