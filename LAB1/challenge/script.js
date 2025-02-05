
// Mild Challenges 
/// The three siblings get their allowance once a week.
/// Their current obsession is buying unique card games and collecting shoes.
/// Below is the total money they split weekly, their names, and the price of
///     a card game and a pair of shoes.

let weeklyAllowance = 129;
let sibling1 = "Jordan";
let sibling2 = "Quinn";
let sibling3 = "Ricardo Montoya De La Rosa Ramirez";
let game = 15.99;
let shoes = 89.78;





// 1. If divided evenly, how much would each sibling get for the week?
43 
// 2. How many games can Jordan buy with their cut?
2
// 3. The cost of games just went up by a dollar and shoes are on sale at 50% (half) off. Change the variables to their new prices.
game = 16.99;
shoes = 44.89;
// 4. Quinn and Ricardo are twins. If they put their money together, how many on sale shoes can they buy in a month (4 weeks)?
1
// 5. How many more games can they buy if they put their money together compared to if they had bought games on their own?
3
// 6. Print out the three siblings' names. "The three siblings are __, __, and ___."
console.log("The three siblins are " + sibling1 + ", " + sibling2 + ", " + sibling3)
// 7. Use console.log() and a built-in method to count how many characters are in Ricardo's name.
console.log(sibling3.length)
// 8. Use console.log() and a built-in method to print out the string "RICARDO MONTOYA DE LA ROSA RAMIREZ"
console.log(sibling3.toString)
// 9. Use console.log() and a built-in method to print out the string "ricardo montoya de la rosa ramirez"
console.log()
// 10. Use console.log() and a built-in method to print out Ricardo's name, but with all the instances of the letter a removed or deleted.
console.log(sibling3.slice);
// 11. Use console.log() and a built-in method to print out "De La Rosa"
console.log(sibling3.slice[7])
// Medium Challenges

// 12. Rewrite these function as an arrow function.
/// Then, call them with different inputs to check the result.

const getRandomNum = () => {
    return Math.floor(Math.random() * 100);
}

const greeting= (name) => {
    return `Hello ${name}, I'm glad you can make it!`;
}

const perfectRoot =  (x) => {
    let root = Math.sqrt(x);
    if (Math.floor(root) === root) {
        return root;
    } else {
        return "No perfect root"
    }
}

// 13. Fix/Finish the following functions.
/// Then, call them with at least 2 different inputs to ensure they work.

/// a. Adds 2 numbers and returns the sum
const addNums = (x, y) => {
    let sum = x + y;
}
// uncomment the line below, to call the function, and add one more function call
 console.log( addNums(4, 6) );


/// b. Prints a special message if name is "Beyonce"
const isBeyonce = (name) => {
     if( name = "Beyonce" ) { 
         return "Welcome Queen!";
     } else {
         return `Sorry {name}, you're not Beyonce`;
 }
}
// Test "Beyonce" and other names to ensure it works

console.log( isBeyonce("david"))

/// c. If the number is even, return the number divided by 2, otherwise, return the number
/// For example reduceEvens(10) => 5 -- reduceEvens(11) => 11
const reduceEvens = (x) => {
     if( x = 10){
      return x / 2
     } else {
         return x;
     }
}
//Write your own function calls
const findSum = (x) => {
    x = 2
    let num = prompt("what is your number")
    let total = x + num
    return("the answer is " + total);
}

// 14. Write a function called shortenString(string) that returns the first 10 characters of a string if it is longer than 10
//remove all
const shortenString = (string) => {
if(string.length < 10){
    return string.length;
} else {
    return string
}
}



// Spicy Challenges
let burger = 5.00;
let fries = 3.00;
let soda = 1.00;

// 15. Write a function buyBurgers(budget) that takes in a budget amount and returns the number of burgers that can be bought.
// Prompt the user for their budget and call the function.
/// If no burgers, fries, and sodas can be bought, return "Sorry, no burgers for you."

const buyBurgers = (budget) => {
prompt("what is your budget");
if( budget > 5 ){
    let x = budget / 5 
    return("you can get " + x + " burgers")
} else{
    return("Sorry, No burgers for you")
}
}
buyBurgers()
// 16. A meal consists of 1 burger, 1 fry, and 1 soda.
/// Write a function called buyMeals(budget) that tells the user how many meals they can buy and how much money they will have left over.
// Prompt the user for their budget and call the function.
/// Bonus: Round the answer to the nearest penny.
const buyMeals = (budget) => {
let amount = prompt("how much money do you have");
let total = burger + fries + soda;
let meals = amount / total 
let leftOver = amount - total
alert("You can have " + meals + " meals and you will have " + leftOver + " dollars left over");

}
buyMeals()

// 17. [Challenge] Write a function missingLeg(side1, side2) that takes in the length of a hypotenuse and a leg of a right triangle and prints out the missing leg's length
// Prompt the user for the two sides and call the function
/// The larger side should be the hypotenuse  
const messingLeg = (side1, side2) => {
let len1 = prompt("what is the length of the first side?")
let len2 = prompt("what is the length of the second side?");
if (len1 > len2){
    alert("side one is the hypotenuse ");
} else {
    alert("side two is the hypotenuse ");
}
}

messingLeg()

// 18. [Super Challenge] In math, Factorial is the product of an integer and all the integers below it.
/// For example: factorial(3) = 3*2*1 = 6 ---  factorial(5) = 5*4*3*2*1 = 120
/// Write a function factorial(x) that finds the factorial of any integer.
// Prompt the user for a number and call the function

const factorial = (x) =>{
    if(x === 0 || x === 1){
        return 1
    } 
    for(var i = x - 1; i >= 1; i--){
        num *= i;
    }
    return x
}

console.log(factorial(5));