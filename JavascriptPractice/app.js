//'use strict';

// I'm trying to learn Javascript using this: https://web.dev/learn/javascript

// Set a variable by using the let keyword in Javascript
let myNumber = 2;

// I don't know if this works (nope it doesn't)
//myNumber2;
//> 10

let osama = 0;

// Block statements look like this in Javascript, like I normally do in C++ and C#
if (osama <= 0)
{
    osama++;

    console.log(osama);
}

// Javascript can detect expressions without needing to declare variables
console.log(5 - 2);

// Javascript can also detect grouping operators, where parts of an expression are grouped together to produce one value
console.log(3 + 2 * 5);

console.log((3 + 2) * 5);

let osamaGrouping = (4 + 3);

console.log(osamaGrouping);

// Javascript coerces the the number of value to a string and concatenates the two values (can convert different types)
console.log("3" + 2);

// Javascript can coerce data types explicitly as well

let osamaData = 21;

typeof osamaData;

console.log(typeof osamaData); // console.log prints some code in the console log

console.log(osamaData = osamaData.toString());

typeof osamaData;

console.log(typeof osamaData);

// Javascript is very case-sensitive, so therefore the capitalization must be consistent correctly

console.log("Javascript is fully case-sensitive");

// But writing the console.log function as console.Log will produce an error in Javascript debugger

// I got an error saying: Uncaught TypeError TypeError: console.Log is not a function
//console.Log("Javascript is fully case-sensitive");

// Case-sensitivity in Javascript also applies to variables as well
const imScared = 0;
console.log(imScared);

// Because I incorrectly coded my variable below, I got this error here
// Uncaught ReferenceError ReferenceError: imscared is not defined
//console.log(imscared);

// Javascript doesn't mind if there is incorrect whitespaces or indentation

        console.log(        "Go write this for me!"     );console.log("Write me to the console, please!");

// Correct way to define a variable in Javascript (also using whitespaces with the let keyword won't produce an error)
let c;

// If I type letc instead of let c, I get an undefined code error
// Uncaught ReferenceError ReferenceError: letc is not defined
//letc;

let b;

// Javascript also ignores line breaks with the let keyword defined, so there won't be an error
console.log(b
    =
    1);

let me = 3;

// Javascript is perfectly fine with formatting a code more efficiently
if (typeof me == "number")
{
    console.log("I am a number!");

    if (me <= 4)
    {
        console.log("I am less than or equal to 4!");
    }
}

// The Number class function (constructor) converts the value to an equivalent of a number
console.log(Number(10));

// Or, a string with a number works too
console.log(Number("16"));

// Although if I use the Number function and don't pass in a number as an argument, I'll get a NaN error (not a number)
console.log(Number("Special"));

// I just found out that Javascript is perfectly fine with using + operator to format a string while using console.log

// If I pass in a null inside the number function, Javascript console will output a number of 0
console.log("Null Number: " + Number(null));

// If I pass in a false boolean inside the number function, Javascript console will output a number of 0
console.log("False Boolean Number: " + Number(false));

// If I pass in a true boolean inside the number function, Javascript console will output a number of 1
console.log("True Boolean Number: " + Number(true));

// This will output with the number object, along with the number I passed in inside the argument
let myNumberObject = new Number(200);
console.log(myNumberObject);

// I can add my number variable with any number
let meThinkOfANumber = 3;
console.log(meThinkOfANumber + 13);

// Basically, the == operator checks if my variable is equal to whatever value I state
// For some reason, my statement string below doesn't print to the console (it's either a bug or I'm doing the code wrong)
// I fixed the statement not showing up in console bug by using the String function (I don't know I figured that out)
// Or I can use the open parentheses and pass in my boolean opeartor (that also fixes the bug as well)
console.log("Is this number equal to 12? " + (meThinkOfANumber == 12));

// Javascript can also work with floating point values too
console.log("0.3 + 0.75 = " + (0.3 + 0.75));

// If I divide any number by 0, I'll get an Infinity reference in the console meaning that the number could be anything to the machine
// Maybe the numbers will loop through forever and the program doesn't understand what number to output for you
console.log(20 / 0);

// Using the Infinity enum will output Infinity to the console, but if say "infinity" instead, I'll get an error
console.log(Infinity);

// Javascript tries to infer data type from a value and context, a string literal containing a number will be understood
console.log("3" * 5);

// Javascript will not understand a number that is typed in words, so a NaN error will be thrown to the console instead
console.log("Three" * 5);

// Found out about the set timeout function at: https://stackoverflow.com/questions/18503001/node-js-console-gets-closed-immediately-after-i-execute-the-program-from-visual
setTimeout(function () {
    process.exit();
}, 5000);