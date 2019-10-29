//type inference only works for return not for arguements
const add = (a: number, b: number) => {
  return a + b;
};

function divide(a: number, b: number) {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

//void vs never
//In void we can return null or undefined
//but in never we cannot return anything

const logger = (message: string): void => {
  console.log(message);
  return undefined;
};

const throwError = (message: string): never => {
  throw new Error(message);
};

let fun: (a: number) => number = (a: number) => 5;

const todaysWeather = {
  date: new Date(),
  weather: "sunny"
};

const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
