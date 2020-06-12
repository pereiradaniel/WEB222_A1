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
console.log(temperatureInFahrenheit + "F is " + conversionFromFahrenheitToCelsius + "C");


/*Task 4: Larger or largest number
    a) Write a function named largerNum using the declaration approach, the function: takes 2 arguments, both numbers, returns the larger(greater) one of the 2 numbers.

    b) Write a function named greaterNum using the expression approach, the function:
    takes 2 arguments, both numbers, returns the greater(larger) one of the 2 numbers.

    c) Call these functions twice with different number parameters, and log the output to the web console with descriptive outputs each time(e.g. "The larger number of 5 and 12 is 12.").
*/




console.log("FINISHED");