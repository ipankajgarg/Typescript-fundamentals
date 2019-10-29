import { User } from "./models/User";

const user = new User({});

user.on("click", () => {
  console.log("Hi Click1");
});

user.on("click", () => {
  console.log("Hi Click2");
});
