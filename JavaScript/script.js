// this is a simple console logging statement
console.log("Whoops! I'm back");

// different kinds of console logging

const msg = `Back again!`;
console.log(msg);
console.info(msg);
console.warn(msg);
console.error(msg);

// to make console log look unique insert HTLM styling

console.log(`%c` + msg, `color: black; background-color: white; font-size: 20px; padding: 5px;`);
console.log(`%c` + msg + `%c` + msg, `color: red;`, `color:green;`);

let firstName = "Carl";
let secondName = "Woodrow";
let town = "Gloucester";
let starSign = "Capricorn";

console.log(`Hi, I'm ` + firstName + ` ` + secondName);
console.log(`from ` + town);
console.log(`I'm also a ... ` + `%c` + starSign, 'color: orange; font-size: 25px;');