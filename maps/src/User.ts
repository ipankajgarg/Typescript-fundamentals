import faker from "faker";
//import { MAppable } from "./CustomMap"
//class User implements MAppable
//when we implements interface then typescript checks that
// when we create an instance of class it must match with the properties of interface

export class User {
  name: string;

  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";

  constructor() {
    this.name = faker.name.firstName();

    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `User Name:${this.name}`;
  }
}
