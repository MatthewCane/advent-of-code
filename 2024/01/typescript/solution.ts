import * as fs from "node:fs";

const input = fs.readFileSync("../input.txt", "utf-8").trim();

const rows = input.split("\n");

var list_a = [];
var list_b = [];

for (var row of rows) {
  list_a.push(Number(row.split("   ")[0]));
  list_b.push(Number(row.split("   ")[1]));
}

list_a.sort();
list_b.sort();

var distance = 0;

for (var i in list_a) {
  const a = list_a[i];
  const b = list_b[i];

  if (a > b) {
    distance += a - b;
  } else {
    distance += b - a;
  }
}

console.log(distance);
