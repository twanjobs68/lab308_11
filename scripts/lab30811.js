//ALAB 308.1.1
        //  Objectives
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
        console.log(musicSequence + 10 + " is the number of the radio station I listen to.");
        console.log("I've listened to church music since I turned " + musicSequence);
        console.log("I love " + musicType + " music!");
        console.log(`${musicType}, music is INSPIRING!`);
        console.log(`I listen to ${musicType} in my car regularly!`);
        console.log(`I listen to ${musicType} in my car regularly on channel ${musicSequence}.`);

        // genre and new artist are accessed outside of the object "person". 
        // The console log use the "\n" escape sequences to display text in new line.

        const genre = "Gospel";
        const newArtist = "FAZE";
        const yrPerform = 97; //questions on performing arithmetic with this variable and person.age
        //OBJECT Literal
        let person = {
            name: "Peggy",
            age: 42,
            occupation: "artist",
            numHits: 15
        }

        //Boolean Literal
        const mayBe = yrPerform > 2000;
        console.log("Has this artist been performing over 10 years?", + mayBe);
        //7-Use template literals for string interpolation and multi-line strings.
        console.log(`The named ${person.occupation}, "${person.name}" made her debut at the age of \n${person.age} and her ${genre} music is now ranking ${person.numHits} on the music charts.\nThe ${person.occupation}, ${newArtist} appeard on the set 5 years prior to\n${person.name}s' first appearance.`);

        //3-Use arithmetic operators to manipulate data.
        let timeLapse = yrPerform - person.age;
        console.log(`At ${timeLapse} years is a young age to break into this business so\n${person.name}'s is going to be OK!`)

        //4-Use comparison operators to compare data.
        const genreLarge = genre > "RNB";
        console.log("Is genre > than Gospel?", genreLarge); //answer is false

        // 6-Implement escape sequences in strings for special characters.
        const summary = "This summary covers the last 5 years of\n" +
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

        //                     Objective - You are planning a cross-country road trip!
//
// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.
// Set up a program to answer the following questions:
// How many gallons of fuel will you need for the entire trip?
// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours?
// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
// Log the results of your calculations using string concatenation or template literals.


const distance = 1500;
const mphA = 55;
const mphB = 60;
const mphC = 75;
const mpgA = 30;
const mpgB = 28;
const mpgC = 23;
let fuelCost = 3.00;
const budget = 175.00;

//How many gallons of fuel will you need for the entire trip?
const galA = distance / mpgA;/*gallons of gas needed for the trip*/
const galB = distance / mpgB;/*gallons of gas needed for the trip*/
console.log("distance times mpg B = ", galB);
const galC = distance / mpgC;/*gallons of gas needed for the trip*/
const galARound = Math.round(galA);
const galBRound = Math.round(galB);
const galCRound = Math.round(galC);
console.log("galA before rounding", galARound);
console.log("galA before rounding", galBRound);
console.log("galA before rounding", galCRound);
//least amount of gas compared between each driving mpg needed for trip
const bestGasAmount = Math.min(galA,galB,galC);//This code uses the Math.min function to find the smallest amount of gallons of gas to complete the trip

//Fuel cost
const costA = galARound * fuelCost;//cost of gas driving 55 mph
const costB = galBRound * fuelCost;//cost of gas driving 60 mph
const costC = galCRound * fuelCost;//cost of gas driving 75 mph

//use the Math.round function to round up cost of gas
// const bestGalRoundA = Math.round(costA);
// const bestGalRoundB = Math.round(costB);
// const bestGalRoundC = Math.round(costC);

//smallest cost of fuel for trip
const bestFuel = Math.min( costA,costB,costC);//This code uses the Math.min function to find the least cost for fuel
const bestFuelRound = Math.round(bestFuel);

//How long will the trip take, in hours?
tripTimeA = distance / mphA;
tripTimeB = distance / mphB;
tripTimeC = distance / mphC;
//use Math.min function to round up trip Time
const bestTripRoundA = Math.round(tripTimeA);
const bestTripRoundB = Math.round(tripTimeB);
const bestTripRoundC = Math.round(tripTimeC);

//Calculate Fastest trip time using Math.min function and round up number using Math.round
const bestTrip = Math.min( tripTimeA,tripTimeB,tripTimeC);//This code uses the Math.min function to find the smallest number result for trip time.
const bestTripRound = Math.round(bestTrip);


//Subtract the cost of fuel from the budget to see if you are within your budget
balanceOfmoneyLeftA = budget - costA;//budget for gas driving 55ph - cost of gas
balanceOfmoneyLeftB= budget - costB;//budget for gas driving 60 mph - cost of gas
balanceOfmoneyLeftC= budget - costC;//budget for gas driving 75 mph - cost of gas
//use Math.round to round up the cost left over
const answerRoundA = Math.round(balanceOfmoneyLeftA);
const answerRoundB = Math.round(balanceOfmoneyLeftB);
const answerRoundC = Math.round(balanceOfmoneyLeftC);

// compare budget with cost of gas and console log 'yes' or no answer
let answerOut = "NO";
console.log("Budget = ", budget);
    
console.log("cost A = ", balanceOfmoneyLeftA);
console.log("cost B = ", balanceOfmoneyLeftB);
console.log("cost C = ", balanceOfmoneyLeftC);

// Will your budget be enough to cover the fuel expense?
if (budget > costA) {
    
  answerOut = "YES"; // cost for trip A is within budget
} else {
  answerOut = "NO"; // cost for trip A is over the budget
}

if (budget > costB) {
    console.log("cost B = ", costB);
    answerOut = "YES"; // cost for trip A is within budget
  } else {
    answerOut = "NO"; // cost for trip A is over the budget
  }

  if (budget > costC) {
    console.log("cost C = ", costC);
    answerOut = "YES"; // cost for trip A is within budget
  } else {
    answerOut = "NO"; // cost for trip A is over the budget
  }

//least amount of money needed for trip
const bestBudget = Math.min( costA,costB,costC);//This code uses the Math.min function to compare the amount for each trip and check if in my budget
const bestBudgetRound = Math.round(bestBudget);

console.log(`I will need ${galARound} gallons of fuel for the entire trip driving ${mphA} miles per hour. Driving time would equal ${bestTripRoundA} hours. The cost of my trip is $${costA}.\n 
Is this trip within my spending budget of $${budget}? Answer: ${answerOut} Money left over after buying gas ${balanceOfmoneyLeftA}`);

console.log(`I will need ${galBRound} gallons of fuel for the entire trip driving ${mphB} miles per hour. Driving time would equal ${bestTripRoundB} hours. The cost of my trip is $${costB}.\n 
  Is this trip within my spending budget of $budget? Answer: ${answerOut} Money left over after buying gas ${balanceOfmoneyLeftB}`);

console.log(`I will need ${galCRound} gallons of fuel for the entire trip driving ${mphC} miles per hour. Driving time would equal ${bestTripRoundC} hours. The cost of my trip is $${costC}.\n 
    Is this trip within my spending budget of $budget? Answer: ${answerOut} Money left over after buying gas ${balanceOfmoneyLeftC}`);
 
console.log(`The best plan for this trip is to get ${bestGasAmount} for ${bestFuel} dollars.  This will allow me to achieve my destination in ${bestTrip} hours and spend ${bestBudgetRound} dollars`);














