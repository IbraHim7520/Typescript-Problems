
type inputType = string | number | boolean;
function formatValue(value:inputType){
    if(typeof value === 'string'){
        return value.toUpperCase()
    }else if(typeof value === 'number'){
        return value*10;
    }else if(typeof value === 'boolean'){
        return value = !value;
    }else{
        return 'Invalid Input'
    }
}

function getLength(data: string | Array<any>){
    if(typeof data === 'string' || Array.isArray(data)){
        return data.length;
    }else{
        return "Invalid Input"
    }
}


class Person{
    name:string;
    age:number
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    getDetails(){
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}


type TItem = {
    title:string,
    rating:number
}
function filterByRating(data:TItem[]):TItem[]{
   const Highitem =  data.filter(res => res.rating > 4.0)
    return Highitem
}


type TUser = {
    id: number,
    name:string,
    email:string,
    isActive:boolean
}
function filterActiveUsers(value:TUser[]):TUser[]{
    if(value.length > 0){
        const onlyActive = value.filter( val => val.isActive == true );
        return onlyActive
    }else{
        return []
    }
}



interface Book{
    title: string,
    author: string,
    publishedYear: number,
    isAvailable: boolean
}
function printBookDetail(data?:Book):string{
    if(!data) return "Invalid Data."
    return `Title: ${data.title}, Author: ${data.author}, Published: ${data.publishedYear}, Available: ${data.isAvailable ? "Yes" : "No"}`
}



function getUniqueValues(arr1: number[], arr2: number[]) {
    let result: number[] = [];
    let idx = 0;

    for (let i = 0; i < arr1.length; i++) {
        result[idx] = arr1[i];
        idx++;
    }
    for (let i = 0; i < arr2.length; i++) {
        let isExists = false;
        for (let j = 0; j < idx; j++) {  
            if (arr2[i] === result[j]) {
                isExists = true;
                break;
            }
        }

        if (!isExists) {
            result[idx] = arr2[i];
            idx++;
        }
    }

    return result;
}



type TProducts = {
    name:string,
    price:number,
    quantity:number,
    discount?:number
}
function calculateTotalPrice(items: TProducts[]): number {
  return items.reduce((total, product) => {
    const finalPrice = product.discount
      ? product.price - (product.price * product.discount) / 100
      : product.price;

    return total + finalPrice * product.quantity;
  }, 0);
}
