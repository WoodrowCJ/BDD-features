
// CONDITIONALS

// let a = 2;

// if ( a == 0 ) {
//     console.log(`success!`);
// }
// else if ( a != 2 ) {
//     console.log(`not 2`);
// } else {
//     console.log(`it must be 2`);
// }
// let b = 1;
// // b ? console.log(`true`) : console.log(`false`);

// b === 1 ? console.log(`Yes`) : console.log(`No`);

// //Exercise 1

// let age = 70;

// //Exercise 2

// if (age >= 18 && age <= 65) {
//     console.log(`within Age range at ` + age);
// } else if(age < 18) {
//     console.log(`sorry you are underage being ` + age);
// } else {
//     console.log(`Have you considered retirement? ` + age);
// }

// age > 50 ? console.log(`Yes`) : console.log(`No`);

// OBJECTS

// let vehicle = {
//     "type": "car",
//     "seats": 5,
//     "wheels": 4
// };
// console.log(vehicle);

// let house = [
//     vehicle,
//     {"type": "bike", "seats": 1, "wheels": 2}
// ];

// console.log(house);

// let x = [1,2,3,4,5];
// let y = [12,-9,12,1,45];
// for (let i = 0; i < x.length; i++) {
// //    console.log(x[i]);
// }

// for (let i of y) {
//     console.log(i);
// }

// JSON NOTATION

// let newJSON = {
//     "name": "Carl",
//     "age" : 50
// }

// let myName = JSON.parse(`{"name" : "Fred"}`);
// console.log(myName.name);

// let str = JSON.stringify(newJSON);
// console.log(str);

let myArray = ["hello","everyone"];
console.log(myArray.length);
myArray.push("hope","it's","going","great");
console.log(myArray.length);
myArray.shift(-1);
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
 