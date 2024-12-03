import * as fs from "node:fs";
import { exit } from "node:process";

const input = fs.readFileSync("../input.txt", "utf-8").trim();

const reports = input.split("\n");

let safe = 0;

for (const report of reports) {
  const readings = report.split(" ");
  let valid = true;
  // Set the direction
  var direction: string;
  if (Number(readings[0]) < Number(readings[1])) {
    var direction = "up";
  } else {
    var direction = "down";
  }

  // console.log(readings);

  for (let i = 0; i < readings.length; i++) {
    let reading_a = Number(readings[i]);
    let reading_b = Number(readings[i + 1]);

    // Check for the same value
    if (reading_a == reading_b) {
      valid = false;
      break;
    }

    // Check the direction
    if (
      (direction == "down" && reading_a < reading_b) ||
      (direction == "up" && reading_a > reading_b)
    ) {
      valid = false;
      break;
    }

    // Check if distance is greater than 3
    const difference = reading_a - reading_b;
    if (difference > 3 || difference < -3) {
      valid = false;
      break;
    }
  }
  if (valid) {
    safe++;
  }
}

if (safe <= 481) {
  console.log("Too low!");
}
if (safe >= 519) {
  console.log("Too high!");
}
console.log(safe);
