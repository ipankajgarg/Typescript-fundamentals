import { User } from "./models/User";

const user = new User({ id:1 ,name:"newer name",age:0});
//user.set({ id: 1 });
// user.set({ name: "NEWNAME", age: 999 });

// user.on("click", () => {
//   console.log("Hi Click1");
// });

// user.on("click", () => {
//   console.log("Hi Click2");
// });
user.on('save',function(){
    console.log("user is changed")
    console.log(user.get("name"))
})

user.save()

// user.set({name:"New Name"})