import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumberCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumberCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection);

//const charactersCollection = new CharactersCollection("Xaayb");
//const sorter = new Sorter(charactersCollection);
//sorter.sort();
//
//console.log(charactersCollection);

interface testing {
  a: number;
}

function fun(obj: testing) {
  console.log(obj);
}

const obj = { a: 1, b: 1 };

fun(obj);
