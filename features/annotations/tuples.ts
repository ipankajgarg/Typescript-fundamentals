const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
};

type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
//pepsi[0] = 40;
const sprite: Drink = ["clear", true, 50];

interface i {
  a: string;
}

type t = { a: string };

var tt: t = { a: "f" };
var ii: i = { a: "f" };

type Alias = { num: number };
interface Interface {
  num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

const carSpecs: [number, number] = [400, 300];

const carStats = {
  horsepower: 400,
  weight: 3354
};
