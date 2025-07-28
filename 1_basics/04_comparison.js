// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // true
// console.log(2 == 1); // false
// console.log(2!= 1); // true
// console.log(2 === 1); // false
// console.log(2!== 1); // true
// console.log(2>1 && 3<2); // false

console.log("2"> 1);
console.log("02" > 1);
console.log("2" > "1");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////  For Interview   explaination ////////////////////////////////////////////////////

// In JavaScript, comparisons are used to compare values. There are two main types: loose and strict comparisons.

// Loose comparison (==) checks only value, not type.
// Strict comparison (===) checks both value and type.
// I always prefer using === and !== to avoid unexpected bugs due to type coercion in JavaScript.

//  ✅ 1st: console.log("2" > 1);
// 🔹 "2" is a string
// 🔹 1 is a number

// JavaScript automatically converts the string "2" to number 2

// This is called type coercion.
// JavaScript mein coercion ka matlab hota hai jab ek type ka value doosre type mein automatically convert ho jata hai, bina hume bataye."

// Jaise agar hum "5" == 5 likhte hain, to "5" ek string hai, aur 5 number hai.
// JavaScript string "5" ko number 5 mein convert kar deta hai – is process ko type coercion kehte hain.

// Coercion do tarah ka hota hai:

// 🔹 Implicit Coercion: Jab JavaScript khud hi type convert karta hai (jaise "2" > 1)
// 🔹 Explicit Coercion: Jab hum khud type convert karte hain (jaise Number("2"))

// ✅ Example bolne ke liye:
// "Agar main likhun: "10" - 2, to JavaScript "10" string ko number 10 mein convert karta hai, aur result aata hai 8.
// Ye coercion ki wajah se hua – type automatic convert ho gaya."

///////////////////////////// definition of coercion ////////////////////////////////////////////////

// Coercion means automatic conversion of one data type to another. In JavaScript, this mostly happens when comparing 
// or performing operations between different types like string and number.






console.log(null> 0); //// false
console.log(null == 0);// false
console.log(null >=0 ); // true


console.log(undefined > 0) // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false
console.log(undefined < 0); // false


console.log(undefined == null); // true
console.log(undefined === null); // false

console.log(null == null); // true
console.log(null === null); // true

console.log(null == undefined); // true
console.log(null === undefined); // false





