let apples = 5;

let speed: string = "fast";

let hasName: boolean = true;

let nothingMuch: null = null;
let mothing: undefined = undefined;

// built in objects

let now: Date = new Date();

//Array

let colors: string[] = ["red", "green", "blue"];

//Classes

class Car {}

let car: Car = new Car();

// Objects literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

//Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

logNumber(0);

//***** */ When to use annotation
// 1) function that return any type

const json = '{"x":10,"y":20}';
const coordinates = JSON.parse(json);
console.log(coordinates);
// let obj = {a:"val"};
// obj.b = ""

//2) When we declare a variable on one line
// and initialize it later
let words = ["red", "green"];
let fountWord;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    fountWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly

let numbers = [10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
