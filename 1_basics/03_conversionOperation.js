
 // ******************************* converison of data types ****************************************** //

// let score = "11888"
// let score = "ll888"
// let score = undefined
//let score = null
 let score = true


//console.log(typeof score );
//console.log(typeof (score) )


let valueInNumber = Number(score)
//console.log(valueInNumber);
//console.log(typeof valueInNumber);


/////////////////////////////////////////////////////////////////////////


//  "33" => 33
// "33abc" => NaN
// true => 1; false =>0 

// let isLoggedIn = 1
// let isLoggedIn = ""
let isLoggedIn = "pallavi"

let booleanIsLoggedIn  = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true; 0 => false 
// "" => false 
// "pallavi" => true


//////////////////////////////////////////////////////////////////////////////

let somenumber = 44

//console.log(typeof somenumber);

let stringNumber = String(somenumber);
//console.log(stringNumber);
///console.log(typeof stringNumber);



// **************************************************** Operation ********************************************* //

let value = 3
let negValue = -value

//console.log(negValue)

//console.log(2+2);
//console.log(2*2);
//console.log(2-2);
//console.log(2**2);
//console.log(2+3);
//console.log(2/3);
//console.log(2%3);

let str1  = "pallavi"
let str2 = " gupta"

let str3 = str1 + str2
//console.log(str3)


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);

// console.log(1 + 2 + "2");
// console.log((3+4) * 4 % 3);

console.log(+true)
console.log(+"")

let num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
 
console.log(gameCounter);


// study to document https://tc39.es/ecma262/#sec-type-conversion
// prefix / post fix https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment