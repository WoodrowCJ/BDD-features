/*
let myObject;
console.log(myObject);
myObject = {
    key: `value`,
    age : `50ish`,
    realAge : 52
};

console.log(myObject);

// interpolation

console.log(`2 + 2 = ${2+2}`);

let totalmoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay;

console.log(`The total bill is £${totalmoney} the remaining amount of money to be paid is £${totalmoney-moneyPaidSoFar}`);
console.log(`Please feel free to leave a Tip!`);
*/

//Iterations
/* FOR loops
Declare a variable
set condition
declaring step


for(let i = 0; i < 10; i++ ) {
   // console.log(`i = ${i}`);
};

let condition = true;
let increment = 0;

while(condition) {
    if(increment == 10) {
        condition = false;
        break;
    }
   // console.log(`increment = ${increment}`);
    increment++;
};

// DO-WHILE  loop
// the same as while, but always runs at least once
// SWITCH cases

let number = 1;

switch(number) {
    case 0:
        console.log(`the number is 0`);
        break;
    case 1:
        console.log(`the number is 1`);
        break;
    default:
        console.warn(`what the deuce!`);
}

*/
// Exercise one

for(let a = 100; a < 201; a++) {
    console.log(`A = ${a}`);
};

// Exercise two

a = 100;
//console.log(a);
while(a<=200) {
    if(a%2 == 0) {
        console.log(`-` + a);
    }
        else {
        console.log(`*` + a);
    }
    a++;
}
console.log(`The End!`);

//exercise three

 let condition = true;
 let increment = 1;
 

while(condition) {
    if(increment == 11) {
        condition = false;
        break;
    }
   console.log(`increment = ${increment}`);

   for(let i = 1; i < 11; i++ ) {
    console.log(`i = ${i}`);
 };


    increment++;
};

//exercise four

let dayOFWeek = 'Wednesday';

switch(dayOFWeek) {
    case 'Monday':
        console.log(`Mon`);
    case 'Tuesday':
        console.log(`Tue`);
    case 'Wednesday':
        console.log(`Wed`);
    case 'Thursday':
        console.log(`Thu`);
    case 'Friday':
        console.log(`Fri`);
    case 'Saturday':
        console.log(`It's the weekend!`);
        break;
    
    default:
        console.warn(`what the deuce!`);
}