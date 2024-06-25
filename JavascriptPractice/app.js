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

// Found out about the set timeout function at: https://stackoverflow.com/questions/18503001/node-js-console-gets-closed-immediately-after-i-execute-the-program-from-visual
setTimeout(function () {
    process.exit();
}, 5000);