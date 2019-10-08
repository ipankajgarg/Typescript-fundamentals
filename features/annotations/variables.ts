let apples: number = 5;

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
