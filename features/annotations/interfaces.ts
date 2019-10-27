interface Reportable {
  summary(): string;
}
//or summary:()=>string

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  isBroken: true,
  summary(): string {
    return `${this.name}`;
  }
};

const drinks = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar}`;
  }
};

const printVehicle = (vehicle: Reportable): void => {
  console.log(`Summary:${vehicle.summary}`);
};

printVehicle(oldCivic);
printVehicle(drinks);

//test
// interface In {
//     st:"easy";
// }
// var test :In={st:"easy"}
