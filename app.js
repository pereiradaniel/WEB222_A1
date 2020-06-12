/*********************************************************************************
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
* this assignment has been copied manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Name: Daniel Pereira  Student ID:    Date: 12/June/2020
*
********************************************************************************/

const underlineTitle = "\n====================\n";
const doubleSpace = "\n\n";

/*
    Task 1: Description as Comments
    In a comment section, describe the following terms with examples(Your code example may appear in comments).
    a) Infinity
    b) Undefined
    c) NaN
*/

// Print title for TASK #1
console.log("TASK #1 Sample code:" + underlineTitle);


/*
    a) Infinity
        A global property and numeric value that represents infinity.
        
        Infinity
            Positive infinity.
            
            *From WS3:
            Infinity is displayed when a number exceeds the upper limit of the floating point numbers, which is 1.797693134862315E+308.


        -Infinity
            Negative infinity.

            *From WS3:
            -Infinity is displayed when a number exceeds the lower limit of the floating point numbers, which is -1.797693134862316E+308.

    *source:  https://www.w3schools.com/jsref/jsref_infinity.asp


*/

console.log("a) infinity\n");


// Show how vars can be set to infinity:
const positiveInfinity = Infinity;
const negativeInfinity = -Infinity;

// Show how vars return their value as infinity or -infinity:
console.log("positiveInfinity:  " + positiveInfinity);
console.log("negativeInfinity:  " + negativeInfinity + doubleSpace);


/*
    b) Undefined
        Represents the primitive value "undefïned".  It is one of Javascript's primitive types.
 
 */

console.log("b) undefined\n");


// Show how a var can be set to undefined and checked for this value:
const valueToTest = undefined;
if (valueToTest == undefined) {
    console.log("valueToTest has been checked and is equal to undefined." + doubleSpace);
}


/*
    c) NaN
        A global property value that represents Not-A-Number
*/

console.log("c) NaN\n");


// Set a var to something other than a number:
const thisIsNotANumber = "Not a number";

// Show how Javascript can deteect if something is NaN:
if (isNaN(thisIsNotANumber)) {
    console.log("The var thisIsNotANumber has been checked, and it is equal to NaN." + doubleSpace);
}


/*
    Task 2: Conversion
    a) Using appropriate method, convert 1010(binary) to decimal, AF(hex) to decimal and 713(Octal) to decimal.Output appropriate messages to the console for each conversion.
*/

// Print title for TASK #2
console.log("TASK #2 Sample code:" + underlineTitle);


const binaryNumber = 1010;
// Use parseInt to convert binary to a decimal:
const binaryConvertedToDecimal = parseInt(binaryNumber, 2);

// Output values:
console.log("Binary to convert:  " + binaryNumber);
console.log("Binary converted to decimal:  " + binaryConvertedToDecimal + "\n");


const hexNumber = "AF";
// Use parseInt to convert hex to a decimal:
const hexConvertedToDecimal = parseInt(hexNumber, 16);

// Output values:
console.log("Hex to convert:  " + hexNumber);
console.log("Hex converted to decimal:  " + hexConvertedToDecimal + "\n");


const octalNumber = 713;
// Use parseInt to convert octal to decimal:
const octalConvertedToDecimal = parseInt(octalNumber, 8);

// Output values:
console.log("Octal to convert:  " + octalNumber);
console.log("Octal converted to decimal:  " + octalConvertedToDecimal + doubleSpace);


/*
    Task 3: Celsius and Fahrenheit temperatures
    a) Store a Celsius temperature in a variable.
    b) Convert it to Fahrenheit and output: "???C is ???F". //??? Represents the value
    c) Store a Fahrenheit temperature into a variable.
    d) Convert it to Celsius and output: "???F is ???C."
    Note: visit www.manuelsweb.com / temp.htm for temperature conversion formula.
*/

// Print title for TASK #3
console.log("TASK #3 Sample code:" + underlineTitle);

const temperatureInCelsius = 33;
const conversionFromCelsiusToFahrenheit = (temperatureInCelsius * 1.8) + 32;
console.log(temperatureInCelsius + "C is " + conversionFromCelsiusToFahrenheit + "F");

const temperatureInFahrenheit = 33;
const conversionFromFahrenheitToCelsius = (temperatureInFahrenheit - 32) / 1.8;
console.log(temperatureInFahrenheit + "F is " + conversionFromFahrenheitToCelsius + "C" + doubleSpace);


/*Task 4: Larger or largest number
    a) Write a function named largerNum using the declaration approach, the function: takes 2 arguments, both numbers, returns the larger(greater) one of the 2 numbers.

    b) Write a function named greaterNum using the expression approach, the function:
    takes 2 arguments, both numbers, returns the greater(larger) one of the 2 numbers.

    c) Call these functions twice with different number parameters, and log the output to the web console with descriptive outputs each time(e.g. "The larger number of 5 and 12 is 12.").
*/

// Print title for TASK #4
console.log("TASK #4 Sample code:" + underlineTitle);

// Declaration:
function largerNum(num1, num2) {
    var output = null;
    num1 > num2 ? output = num1 : output = num2;
    return output;
}

// Expression:
var greaterNum = function(num1, num2) {
    var output = null;
    num1 > num2 ? output = num1 : output = num2;
    return output;
};

console.log("largerNum function:\n");
console.log("The larger number between 33 and 11 is: " + largerNum(11, 33));
console.log("The larger number between 66 and 22 is: " + largerNum(66, 22) + "\n");

console.log("greaterNum function:\n");
console.log("The larger number between 33 and 11 is: " + greaterNum(11, 33));
console.log("The larger number between 66 and 22 is: " + greaterNum(22, 66) + "\n");


/*
    Task 5: Evaluator
    a) Write a function named Evaluator using the declaration approach, the function:
        - takes unknown number of arguments which are all number scores,
        - returns true if the average of these number scores is greater than or equal to 25.
        - Otherwise return false.
    
    b) Call this function 3 times with different number parameters, and log the output to the web console with descriptive outputs each time(e.g.“Average grater than or equal to 25: false”);
*/

// Print title for TASK #5
console.log("TASK #5 Sample code:" + underlineTitle);


var evaluator = function() {

    var numberOfArguments = arguments.length;
    var sum = 0;

    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    var average = sum / numberOfArguments;

    var output = false;
    if (average == 25 || average > 25) {
        output = true;
    }

    return output;
}
console.log("Nums:  1, 2, 3 -> Average greater than or equal to 25:  " + evaluator(1, 2, 3));
console.log("Nums:  10, 20, 30, 40  -> Average greater than or equal to 25:  " + evaluator(10, 20, 30, 40));
console.log("Nums:  100, 200, 300, 400, 500  -> Average greater than or equal to 25:  " + evaluator(100, 200, 300, 400, 500) + doubleSpace);


/*
    Task 6: ShowMultiples
    a) Write a function called showMultiples using the declaration approach, the function:

    - Takes 2 numeric arguments(num, numMultiples) – assume the user is entering valid(positive) whole numbers
    - Outputs all of the multiples of the num argument from 1 to numMultiples: for example:

    if num = 5 and numMultiples = 4, the function would output:

        5 x 1 = 5
        5 x 2 = 10
        5 x 3 = 15
        5 x 4 = 20

    b) Call this function 3 times with different number parameters, and log the output to the web console with descriptive outputs each time.
*/

// Print title for TASK #6
console.log("TASK #6 Sample code:" + underlineTitle);

function showMultiples(num, numMultiples) {
    var output = [];
    var tempNum = 0;
    for (var i = 1; i <= numMultiples; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
    return "Process complete.\n";
}

console.log("showMultiples(5, 4):\n" + showMultiples(5, 4));
console.log("showMultiples(10, 3):\n" + showMultiples(10, 3));
console.log("showMultiples(7, 7):\n" + showMultiples(7, 7) + "\n");


/*
    Task 7: Closure / Self Invoking
    Use JavaScript Closure / self invoking method to do the following:
        a) Name the outer function as ‘Increment”.
        b) Store 100 as a counter in the outer function.
        c) Increment the counter by 100 in the inner function and return.
        d) Call “Increment” three times and store the returned value in a variable each time.
        e) Log the final value in the web console(400 is the final value for the third call).
*/

// Print title for TASK #7
console.log("TASK #7 Sample code:" + underlineTitle);

var increment = (function () {
    var counter = 100;
    return function () { counter += 100; return counter }
})();

/*function increment() {
    var counter = 100;

    function innerFunc() {
        counter += 100;
    }

    innerFunc();
    return innerFunc();
}
*/
console.log("increment(100) will output:  " + increment());
console.log("increment(200) will output:  " + increment());
console.log("increment(300) will output:  " + increment() + doubleSpace);



console.log("FINISHED");