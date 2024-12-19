//ALAB 308.1.1
//  PART 1                 Objectives
// Create variable declarations using both let and const.
// Apply different types of data literals.
// Use arithmetic operators to manipulate data.
// Use comparison operators to compare data.
// Perform string concatenations.
// Implement escape sequences in strings for special characters.
// Use template literals for string interpolation and multi-line strings.
// Create effective documentation through the use of comments.

//1-Create variable declarations using both let and const.

let musicChartNum = 2;
let musicSequence = 5;
const musicType = "Gospel";

//2-Apply different types of data literals and  5-Perform string concatenations.
console.log(
  musicSequence + 10 + " is the number of the radio station I listen to."
);
console.log("I've listened to church music since I turned " + musicSequence);
console.log("I love " + musicType + " music!");
console.log(
  `${musicType}, music is INSPIRING and number ${musicChartNum} on the Grant music chart!`
);
console.log(`I listen to ${musicType} in my car regularly!`);
console.log(
  `I listen to ${musicType} in my car regularly on channel ${musicSequence}.`
);
console.log(" ");
// genre and new artist are accessed outside of the object "person".
// The console log use the "\n" escape sequences to display text in new line.

const genre = "Gospel";
const newArtist = "FAZE";

let answer = "NO";
//OBJECT Literal
let person = {
  name: "Peggy",
  age: 42,
  occupation: "artist",
  numHits: 15,
  yrPerform: 1997, //questions on performing arithmetic with this variable and person.age
};
const performanceYears = new Date();
const currentYear = performanceYears.getFullYear(); //Use the getFullYear function in JavaScript to access full year for calculations
//Boolean Literal
const mayBe = currentYear - person.yrPerform;
console.log(currentYear);
console.log(mayBe);
if (mayBe > 10) {
  answer = "YES";
  console.log(answer);

  console.log(
    `Artist ${person.name} began performing in ${person.yrPerform}. The Current year is ${currentYear}. This artist has been performing for ${mayBe} years`
  );
  console.log("Has this artist been performing over 10 years?", answer);
} else {
  console.log("This artist has not been performing over 10 years!");
}
console.log("-------------------------");

//7-Use template literals for string interpolation and multi-line strings.
console.log(
  `The named ${person.occupation}, "${person.name}" made her debut at the age of \n${person.age} and her ${genre} music is now ranking ${person.numHits} on the music charts.\nThe ${person.occupation}, ${newArtist} appeard on the set 5 years prior to\n${person.name}s' first appearance.`
);

//3-Use arithmetic operators to manipulate data.
let timeLapse = person.yrPerform - person.age;
console.log(
  `At ${timeLapse} years is a young age to break into this business so\n${person.name}'s is going to be OK!`
);

//4-Use comparison operators to compare data.
const genreLarge = genre > "RNB";
console.log("Is genre > than Gospel?", genreLarge); //answer is false

// 6-Implement escape sequences in strings for special characters.
const summary =
  "This summary covers the last 5 years of\n" +
  "an artists work that has gone unnoticed for years. \n" +
  "This artist and her talents entertain the old and the yourng\n" +
  "and this is one music producer who can't wait to see whats next for her. \n";
console.log(summary);

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

//1. Check if all numbers are divisible by 5. Cache the result in a variable.
console.log(
  "1. Check if all numbers are divisible by 5. Cache the result in a variable"
);
const isDiv1 = n1 % 5;
const isDiv2 = n2 % 5;
const isDiv3 = n3 % 5;
const isDiv4 = n4 % 5;
const isDivAll = n1 % 5 && n2 % 5 && n3 % 5 && n4 % 5;
console.log(
  `The return value of using the % operator is "${isDivAll}"  0 is equal to true and 1 is equal to false.\nThis result from variable "isDivAll" means the numbers are divisible by 5  `
);
const allDiv = n1 / 5 && n2 / 5 && n3 / 5 && n4 / 5;

console.log(
  "Are the numbers " + n1,
  "," + n2,
  "," + n3,
  "and " + n4 + " divisible by 5? answer: " + allDiv + ".  0=false and 1=true"
);
console.log(
  "Below is an example of checking each number for divisibility, separately, using the / operator.  A lot more coding done in this way."
);
console.log(
  `Is ${n1} divisible by 5? Remainder: ${isDiv1} -There is no remainder so the answer is True.`
);
console.log(
  `Is ${n2} divisible by 5? Remainder: ${isDiv2} -There is no remainder so the answer is True.`
);
console.log(
  `Is ${n3} divisible by 5? Remainder: ${isDiv3} -There is no remainder so the answer is True.`
);
console.log(
  `Is ${n4} divisible by 5? Remainder: ${isDiv4} -There is no remainder so the answer is True.`
);
console.log(``);
//2. Check if the first number is larger than the last. Cache the result in a variable.

console.log(
  `2. Check if the first number is larger than the last. Cache the result in a variable.`
);
const bigNum = n1 > n4;
console.log(n1 + " is greater than " + n4 + " is a " + bigNum + " statement.");
console.log(``);
//3. Perform the following arithmatic:
console.log(`3. Perform the following arithmatic:`);
//-Subtract the first number from the second number.
const result1 = n1 - n2;
console.log(
  `-Subtract the first number from the second number. "const result1 = n1 - n2;";`
);
// -Multiply the result by the third number.
console.log(
  `-Multiply the result by the third number. "const result2 = result1 * n3;";`
);
const result2 = result1 * n3;

// -Find the remainder of dividing the result by the fourth number.
console.log(
  `-Find the remainder of dividing the result by the fourth number. "const result3 = result2 / n4;";`
);
const result3 = result2 / n4;
console.log(``);
// 4. Change the way that isOver25 calculates so that we do not need to use the NOT operator (!)
// in other logic comparisons. Rename the variable as appropriate.
console.log(
  `4. Change the way that isOver25 calculates so that we do not need to use the NOT operator (!)\nin other logic comparisons. Rename the variable as appropriate.`
);
const isOver25 = n1 != 25 || n2 != 25 || n3 != 25 || n4 != 25;
const myIsOver25 = !(n1 === 25 && n2 === 25 && n3 === 25 && n4 === 25);

console.log(
  `The equation looks like this:  "const myIsOver25 = !(n1 === 25 && n2 === 25 && n3 === 25 && n4 === 25);"`
);
console.log(
  `The result of changing the not operator to === operation as seen below, is the same as using the != operator and still gives "${myIsOver25}" as the equation value`
);
console.log(`The following 2 equations have the same value of "true."`);
console.log(
  `const myIsOver25 = !(n1 === 25 && n2 === 25 && n3 === 25 && n4 === 25); value ${myIsOver25}`
);
console.log(
  `const isOver25 = n1 != 25 || n2 != 25 || n3 != 25 || n4 != 25; value ${isOver25}`
);
console.log(``);
console.log("ALAB 308.1.1 - PART 2 PRACTICAL MATH");
console.log("");

//   PART 2                  Objective - You are planning a cross-country road trip!
//
// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average gasCost of fuel is $3 per gallon.
// Set up a program to answer the following questions:
// How many gallons of fuel will you need for the entire trip?
// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours?
// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
// Log the results of your calculations using string concatenation or template literals.

let distance = 1500;
let mphA = 55;
let mphB = 60;
let mphC = 75;
let mpgA = 30;
let mpgB = 38;
let mpgC = 23;
let fuelCost = 3.0;
let budget = 175.0;

//How many gallons of fuel will you need for the entire trip?
const galA = distance / mpgA; /*gallons of gas needed for the trip*/
const galB = distance / mpgB; /*gallons of gas needed for the trip*/
const galC = distance / mpgC; /*gallons of gas needed for the trip*/

//Use Math.round function to round the distance traveled per gallon of gas
const galARound = Math.round(galA); //Rounded gallons of gas A
const galBRound = Math.round(galB); //Rounded gallons of gas B
const galCRound = Math.round(galC); //Rounded gallons of gas C

// console.log("galA gallons of gas needed after rounding", galARound);
// console.log("galB gallons of gas needed after rounding", galBRound);
// console.log("galC gallons of gas needed after rounding", galCRound);
console.log(" ");

console.log(
  `Driving ${distance} miles at ${mphA} miles per hour, using ${mpgA} miles per gallon of gas\n ,${galARound} gallons of gas needed for entire trip.`
);
console.log(
  `Driving ${distance} miles at ${mphB} miles per hour, using ${mpgB} miles per gallon of gas\n  ${galBRound} gallons of gas needed for entire trip.`
);
console.log(
  `Driving ${distance} miles at ${mphC} miles per hour, using ${mpgC} miles per gallon of gas\n  ${galCRound} gallons of gas needed for entire trip.`
);

//Determine trip with least amount of fuel needed
const bestGasAmount = Math.min(galARound, galBRound, galCRound); //This code uses the Math.min function to find the smallest amount of gallons of gas to complete the trip
console.log(
  "best fuel amount needed compared to all 3 mpg equations",
  bestGasAmount
);
console.log(" ");

//Calculate Total Fuel Cost for each mph trip
const gasCostB = galBRound * fuelCost; //gasCost of gas driving 60 mph
const gasCostA = galARound * fuelCost; //gasCost of gas driving 55 mph
const gasCostC = galCRound * fuelCost; //gasCost of gas driving 75 mph

// console.log("gasCost of gasARound using galARound * fuelCost equation is $", gasCostA);
// console.log("gasCost of gasBRound using galBRound * fuelCost equation is $", gasCostB);
// console.log("gasCost of gasCRound using galCRound * fuelCost equation is $", gasCostC);

// console.log(" ");
//Determine trip that will cost the least amount of money for fuel
const bestFuel = Math.min(gasCostA, gasCostB, gasCostC); //This code uses the Math.min function to find the least gasCost for fuel

const bestFuelRound = Math.round(bestFuel);

//How long will the trip take, in hours?
const tripTimeA = distance / mphA;
const tripTimeB = distance / mphB;
const tripTimeC = distance / mphC;
// console.log("The time for tripA before rounding is " + tripTimeA);
// console.log("The time for tripB before rounding is " + tripTimeB);
// console.log("The time for tripC before rounding is " + tripTimeC);
// console.log(" ");
//use Math.min function to round up tripTime
const bestTripRoundA = Math.round(tripTimeA);
const bestTripRoundB = Math.round(tripTimeB);
const bestTripRoundC = Math.round(tripTimeC);
console.log("The time for tripA after rounding is " + bestTripRoundA);
console.log("The time for tripB after rounding is " + bestTripRoundB);
console.log("The time for tripC after rounding is " + bestTripRoundC);

console.log(" ");
//Calculate Fastest trip time using Math.min function and round up number using Math.round
const bestTrip = Math.min(bestTripRoundA, bestTripRoundB, bestTripRoundC); //This code uses the Math.min function to find the smallest number result for trip time.
const bestTripRound = Math.round(bestTrip);
console.log("Lowest Trip Travel time is ", bestTripRound);
console.log(" ");

//Subtract the gasCost of fuel(gasCostA,gasCostB,gasCostC) from the budget to see if you are within your budget(Amount of money left over after purchasing gas)
const balanceOfmoneyLeftA = budget - gasCostA; //budget for gas driving 55ph - gasCost of gas
const balanceOfmoneyLeftB = budget - gasCostB; //budget for gas driving 60 mph - gasCost of gas
const balanceOfmoneyLeftC = budget - gasCostC; //budget for gas driving 75 mph - gasCost of gas
console.log(
  "Amount of money left after purchasing gas for tripA is ",
  balanceOfmoneyLeftA
);
console.log(
  "Amount of money left after purchasing gas for tripB is ",
  balanceOfmoneyLeftB
);
console.log(
  "Amount of money left after purchasing gas for tripC is ",
  balanceOfmoneyLeftC
);

console.log(" ");

let allOverBudget = true; //assume all gas price is over budget

// Check if gasCostA is Over-budget or is negative
if (gasCostA > budget || gasCostA < 0) {
  console.log(
    "Gas Cost A = ",
    gasCostA + " and is over my budget of $" + budget + " for fuel "
  );
  console.log(
    `I will need ${galARound} gallons of fuel for the entire trip driving ${mphA} miles per hour. Driving time would equal ${bestTripRoundA} hours.\n Is this trip within my spending budget of ${budget}? Answer: ${answerOut}! Money left over after buying gas $${balanceOfmoneyLeftA}`
  );

  console.log(" ");
} else {
  allOverBudget = false;
  console.log(
    "I'm within my budget!! The amount I will pay for fuel is ",
    gasCostA
  );
}

// Check if gasCostB is Over-budget or is negative
if (gasCostB > budget || gasCostB < 0) {
  console.log(
    "Gas Cost B = ",
    gasCostB + " and is over my budget of " + budget
  );
  
} else {
  allOverBudget = false;
  console.log(
    "I'm within my budget!! The amount I will pay for fuel is ",
    gasCostB
  );
}

// Check if gasCostC is Over-budget or is negative
if (gasCostC > budget || gasCostC < 0) {
  console.log(
    "Gas Cost C = ",
    gasCostC + " and is over my budget of " + budget
  );
  
} else {
  allOverBudget = false;
  console.log(
    "I'm within my budget!! The amount I will pay for fuel is ",
    gasCostC
  );
}

// If all of the gasCosts are over-budget or negative, then gasCost is notin  the budget
if (allOverBudget) {
  console.log("All Trip gas Costs are Over Budget!");
}

console.log(`The best trip for the best gas is ${bestFuelRound}.`);
console.log(`Best trip with the best time is ${bestTripRound}`); //for this trip is to get ${bestGasAmount} gallons of gas for ${bestFuelRound} dollars.`);

let bestFuelMatch = true;

console.log(typeof bestFuelRound);
console.log(typeof gasCostA);

if (bestFuelRound === gasCostA) {
  console.log(`Most efficient and affordable Trip is ${mpgA} miles per gallon, driving at ${mphA} miles per hour.Driver will purchase ${galARound} gallons of gas and pay $${gasCostA} for fuel.
  Driver will have $${balanceOfmoneyLeftA} left from budget to spend. It will take ${bestTripRoundA} hours to drive the distance of ${distance}.`);
} else {
  bestFuelMatch = false;
}
if (bestFuelRound === gasCostB) {
  console.log(`Most efficient and affordable Trip is ${mpgB} miles per gallon, driving at ${mphB} miles per hour.Driver will purchase ${galBRound} gallons of gas and pay $${gasCostB} for fuel.
    Driver will have $${balanceOfmoneyLeftB} left from budget to spend. It will take ${bestTripRoundB} hours to drive the distance of ${distance}.`);
} else {
  bestFuelMatch = false;
}
if (bestFuelRound === gasCostC) {
  (`Most efficient and affordable Trip is ${mpgC} miles per gallon, driving at ${mphC} miles per hour.Driver will purchase ${galCRound} gallons of gas and pay $${gasCost} for fuel.
    Driver will have $${balanceOfmoneyLeftC} left from budget to spend. It will take ${bestTripRoundC} hours to drive the distance of ${distance}.`);
} else {
  bestFuelMatch = false;
}
if (bestFuelMatch) {
  console.log("No trips match best fuel rounded " + bestFuelRound);
}

console.log("END");
