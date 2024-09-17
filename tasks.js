// Practice Task - 01 
/***

Task-1:

    - You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

    Input:
    The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

    Output:
    Print the result.

    Sample Input:
    1000
    700

    Sample Output:
    300

*/ 
var money = 1000;
var orangePrice = 350;
var applePrice = 350;
var totalCost = orangePrice + applePrice;

console.log(money - totalCost);


var myMoney = 1000;
var applePrice = 700;
var returnMoney = (myMoney - applePrice); 

console.log(returnMoney);


// Practice Task - 02 
/***

Task-2:

    - Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

    Input:
    The first line of the input is the marks of the five subjects mentioned above,  respectively.
    
    Output:
    Print the result in 2 decimal places.
    
    Sample Input:
    75.25, 65, 80, 35.45, 99.50
    
    Sample Output:
    71.04

*/ 
var mathematics = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var english = 99.50;

var totalMarks = mathematics + biology + chemistry + physics + english;
var averageMarks = totalMarks / 5;

console.log(averageMarks.toFixed(2));


var mathematics = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var english = 99.50;

var avgMarks = (mathematics + biology + chemistry + physics + english) / 5;

console.log(parseFloat(avgMarks.toFixed(2)));


// Practice Task - 03
/***

Task-3:

    - You task is to divide the given number by 5 and show the remainder as the output.

    Input:
    The first line of the input contains the number.

    Output:
    Print the remainder.

    Sample Input:
    119

    Sample Output:
    4
  
*/ 
var number = 119;
var mod = (number % 5);

console.log(mod);


var num = 119;
console.log(num % 5);


// Practice Task - 04
/***

Task-4:

    - What will be the result of the following codes:

    var a = isNaN(‘11’);

    var a = isNaN(2-10);

    Explain your answers.

    
*/ 
const a = isNaN("11");
console.log(a);


const x = isNaN(2-10);
console.log(x);