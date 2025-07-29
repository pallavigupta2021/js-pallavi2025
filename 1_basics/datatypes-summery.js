//  primitive datatypes

// 7 types : String, Number, Boolean , null, undefined, symbol, BigInt 

const score = "false" 
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol("123")
const anotherId = Symbol("123")

//console.log(id === anotherId);

const bigNumber = 345678933356777777777777n


console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof bigNumber);

//////////////////////////////////////////// Reference (Non primitive) ///////////////////////////////////////////////

// Array , Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"]; // type of object

let myObj = {
    name:"pallavi",
    age:"29"
} // type of object

const myFunction  = function(){
    console.log("Hello world");

} // type of function

//  console.log(typeof heros)
//  console.log(typeof myObj)
//  console.log(typeof myFunction)



// Master in objects and browser web events ya events master kar lo java script aa gyi

//https://262.ecma-international.org/5.1/#sec-11.4.3









