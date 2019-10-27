
class ArrayOfNumbers<T>{
constructor(public collection:T[]){}

get(index:number):T
{
    return this.collection[index]
}

}



const arr = new ArrayOfNumbers(['1','2'])