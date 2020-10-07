/* Group Members
Joshua Makula
Julius Wasajja
Queen Emily
Trevor Kakuba */

/* 
  A factial is the product of all positive numbers from n down.
  Written as: n!
  Examples 10! = 10*9*8*7*6*5*4*3*2*1
*/

function factorialNumber(num) {
  if (typeof num != "number") {
    return 0;
  }
  // Return 1 if num is 0 or 1
  if (num === 0 || num === 1) return 1;
  // If num is negative; No factorial for negative numbers
  if (num < 0) {
    console.log("No factorial for negative numbers.");
    return 1;
  }
  return num * factorialNumber(num - 1);
}
console.log(factorialNumber(5));

module.exports = factorialNumber;
