import { User } from "./models/User";

const user = new User({});

user.on("click", () => {
  console.log("Hi Click1");
});

user.on("click", () => {
  console.log("Hi Click2");
});

user.on("i am weird", () => {
  console.log("Hi Weird");
});
user.trigger("no event");

//console.log(user);
