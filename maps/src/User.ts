import faker from "faker";
//import { MAppable } from "./CustomMap";

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
