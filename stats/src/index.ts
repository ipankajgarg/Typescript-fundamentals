import fs from "fs";

//encoding:-utf8 means we are reading some kind of text file and want a string in response intead of buffer
const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8"
  })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === "Man United" && match[5] === "H") {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === "A") {
    manUnitedWins++;
  }
}

console.log(`mMan united wins ${manUnitedWins}`);
