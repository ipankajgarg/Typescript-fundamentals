import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users/1";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo  = response.data as Todo


  console.log(todo);
});



//const m:Todo = {id:1,title:"pankaj",completed:"f"}
//const m: string = 1;
