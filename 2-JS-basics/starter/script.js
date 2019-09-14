//************* *LECTURE 1* ******************

//console.log('Hello World!!!');





//************* *LECTURE 2* ******************
/*****************************
* Variables and data types
*/

/*There are 5 Primitive (Non-Object) Javascript Data Types

1. Number - Floating point numbers, for decimals and integers
2. String - Sequence of characters, used for text
3. Boolean - Logical data type that can only be true or false
4. Undefined - Data type of a variable that doesnt have a value yet
5. Null - Non-existent

Javascript data types are automatically assigned to variables
*/


//Can set a string with single quotes '' or double quotes ""

/*

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and MArk';
var if = 23;

*/






//************* *LECTURE 3* ******************

/*****************************
* Variable mutation and type coercion
*/

/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/





//************* *LECTURE 4* ******************


/*****************************
* Basic operators
*/

/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yeahMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older tha John');
var x;
console.log(typeof x);
*/


//************* *LECTURE 5* ******************


/*****************************
* Operator precedence
*/

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);


// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);

*/



/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / 
(height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/


/*
var markMass = 78;
var markHeight = 1.69;

var johnMass = 92;
var johnHeight = 1.95;


var bmiMark = markMass / (markHeight * markHeight);
var bmiJohn = johnMass / (johnHeight * johnHeight);

console.log("bmi mark = " + bmiMark + "\nBmi John = " + bmiJohn);

var markHigher = bmiMark > bmiJohn;
console.log("Is Mark's BMI higher than John's? " + markHigher);

*/



