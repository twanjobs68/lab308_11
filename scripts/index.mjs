// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;


//1. Check if all numbers are divisible by 5. Cache the result in a variable.

const isDiv1 = n1 % 5;
const isDiv2 = n2 % 5;
const isDiv3 = n3 % 5;
const isDiv4 = n4 % 5;

const allDiv = n1/5 && n2/5 && n3/5  && n4/ 5;
console.log("Are the numbers " + n1,"," + n2, "," +n3, "and " + n4 + " divisible by 5? answer: " + allDiv + ".  0=false and 1=true");

console.log("Is ", n1, " divisible by 5? Remainder:" + isDiv1 + "-There is no remainder so the answer is True.");
console.log("Is ", n2, " divisible by 5? Remainder:" + isDiv2 + "-There is no remainder so the answer is True.");
console.log("Is ", n3, " divisible by 5? Remainder:" + isDiv3 + "-There is no remainder so the answer is True.");
console.log("Is ", n4, " divisible by 5? Remainder" + isDiv4 + "-There is no remainder so the answer is True.");

//2. Check if the first number is larger than the last. Cache the result in a variable.
 const bigNum = n1 > n4;
console.log(n1 +" is greater than " + n4 + " is a " + bigNum + " statement.");

//3. Perform the following arithmatic:
//-Subtract the first number from the second number.
const result1 = n1 - n2;
// -Multiply the result by the third number.
const result2 =result1 * n3;
// Find the remainder of dividing the result by the fourth number.
const result3 = result2 / n4;

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!)
// in other logic comparisons. Rename the variable as appropriate.
const myIsOver25 = n1 >= 25 || n2 >= 25 || n3 >= 25 || n4 >= 25;

console.log(`The result of changing the not operator to a >= operation is the same as using the not function and still gives "${myIsOver25}" as the answer`);






//inequality checking-whether 2 values are not equal to each other
bb=28 != 28;
console.log("Is 28 NOT equal to 28? " + bb);//false
//strict version of not equal
const cc = 78 !== "78";
console.log("Is 78 NOT equal to the value and data type of 78 ? " + cc);



// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log("The value of isOver25 is: " + isOver25);
// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);