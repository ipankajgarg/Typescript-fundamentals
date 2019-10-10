const carMAkers = ["ford", "toyota", "chevy"];
const date = [new Date(), new Date()];

const carsByMake: string[][] = [];

//Help with inference when extracting values

const myCar = carMAkers[0];

const newCar = carMAkers.pop();

//Prevent incompatible values

//arMAkers.push(100)

carMAkers.map((car: string): string => {
  return car.toUpperCase();
});

const importantDates = [new Date(), "2030-10-10"];

importantDates.push("2030-10-10");
importantDates.push(new Date());
