class Vehicle {
  constructor(public color: string) {}

  //color: string;

  public drive(): void {
    console.log("chugga chugga");
  }

  protected honk(): void {
    console.log("beep");
  }
}

class CAr extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  public drive() {
    console.log("vroom");
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle("orange");
vehicle.drive();
console.log(vehicle.color);

const carObj = new CAr(4, "red");
carObj.startDrivingProcess();
