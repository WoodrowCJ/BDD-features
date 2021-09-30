/*

1. Create a function that takes in 2 parameters num1 and num2 and subtracts the two numbers.

2. Create a function expression called welcome that take in name and age as a parameters. The outcome should be like so:

e.g. "My name is Cameron, i am 28 years old"

3. Create an arrow function called powerUp that takes in two values n1 and n2. The arrow function will return the power of the two numbers.

e.g:
* n1=2, n2=3 will return 8 (2 x 2 x 2);
* n1=3, n2=3 will return 27 (3 x 3 x 3);

-> hint use Math.pow()

*/

// Exercise 1

let x = subNums(50, 30); // declare the variable x as a function called subNums(with two arguments)
function subNums(a,b) {
    return a - b;
}  

console.log(x);

// Exercise 2

welcome = (firstName, age) => (console.log(`My name is ${firstName}, I'm ${age} and flipping feel it today!`));
welcome(`Carl`,`50`);

// Exercise 3

powerUp = (n1,n2) => (console.log(`powered up = ` + Math.pow(n1,n2)));
powerUp(5,3);

console.log(`Now where's that beer?`);

