var orangePrice = 180;
var chocolatePrice = 10.5;
var applePrice = "120";

console.log(orangePrice);
console.log(chocolatePrice);
console.log(applePrice);

console.log(typeof orangePrice);
console.log(typeof chocolatePrice);
console.log(typeof applePrice);

console.log(orangePrice + chocolatePrice);
console.log(orangePrice + applePrice);

// parseInt and parseFloat
var bananaPrice = parseInt("Ten Taka");
var shirtPrice = parseInt("550.5");
var iceCreamPrice = parseFloat("50.5");

console.log(bananaPrice);
console.log(shirtPrice);
console.log(iceCreamPrice);

console.log(shirtPrice + iceCreamPrice);
console.log(orangePrice + parseInt(chocolatePrice) + parseInt(applePrice));

// toFixed
var first = 0.1;
var second = 0.2;
var total = first + second;
console.log(total.toFixed(5));

// Infinity
const num = 50 / 0;
console.log(num);