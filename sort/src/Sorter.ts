//import { NumberCollection } from "./NumberCollection";

interface Sortable {
  length: number;
  compare(leftIndx: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  // constructor(public collection: Sortable) {
  //   this.collection = collection;
  // }
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract compare(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
