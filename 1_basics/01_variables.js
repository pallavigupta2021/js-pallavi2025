const accountId = 444;
let accountEmail = "pallaigupta251996@gmail.com";
var accountPassword = "23488"
accountCity = "Noida"
let accountState;

//accountId  = 2 // Not allowed to changes Assignment to constant variable.

// { curly braces ko scope variable bolte hain}

/*
Prefer not to use var 
becouse of issue in block scope  and functional scope 

initially  var ke ander javascript scope per kaam hi nahi karti thi.. 
bhut problem thi jaise ager name 10 jagah likha hain to 10 jagah same name likh jata tha
block scope janta hi nahi tha and no control on block scope 
tab aaya let so ab har jagah let use hota hain jisse scope wali problem resolve ho gyi
*/

 accountEmail = "pallu6@gmail.com";
 accountPassword = "58585"
 accountCity = "Gurgaon"


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


