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

// Javascript can understand strings with single quotations marks and prints them to the console the same way as double quotation marks
console.log('GO!!!');

// Javascript can write quotation marks to the console if the marks are enclosed inside the whole quote first
console.log('"Hey there!", said Osama Hussein');

// This below will return an uncaught syntaxerror because of the extra apostrophe in I'm and it doesn't have a closed '
//console.log('"I'm a string," said Osama Hussein');

// The \ fixes this bug that occurs above
console.log('"I\'m a string, " said Osama Hussein');

let osamaString = String(6);
console.log(osamaString);

// Finds what type of variable is being returned in the variable I defined above
console.log(typeof osamaString);

let stringObject = new String("My string!");
console.log(stringObject);

console.log(typeof stringObject);

// Using double quotes while using line breaks returns an invalid or unexpected syntax token
/*const stringError = "This
is a string.";*/

// Using single quotes with line breaks won't work either
/*const stringWorks = 'This
is a string.';

console.log(stringWorks) */

// Seperated strings can be printed to the console using the + operator
// Javascript + operator acts as a concatenation operator, which combines seperated strings into one string
console.log("The plus" + "/minus signs mean nothing if you're not a real programmer!" + " Just kidding!");

// Placeholder final string with 2 + 2
console.log("What's 2+2? " + (2 + 2) + ".");

// ${} are interpolated by default, meaning that the result of the expression replaces the placeholder in the final string
console.log(`What's 2+2? ${ 2 + 2 }.`);

const winningAttitude = "Osama Hussein and I am looking to win at life and programming now!"

// The first argument of this function below contains an array of string values and the second argument defines the placeholder
function referenceWinningAttitude(strings, placeHolder) {
    const what = strings[0];
    console.log(`${ what }the real ${ placeHolder }.`);
}

// Each placeholder is passed to the function above as a standalone value with an associated placeholder I set
referenceWinningAttitude`I am ${winningAttitude}.`;

// All values in Javascript are implicitly true or false
// The Boolean object is used to coerce a value to be true or false, based on the implicit state of that value
console.log(Boolean("Let's go!!"));

// Boolean values that return false include 0, null, NaN, undefined, an empty string (""), omitted value and false
console.log(Boolean(NaN));
console.log(Boolean(-0));

// The boolean below will return true because the number isn't equal to 0
console.log(Boolean(6));

// Even if I input the string to say "false", the boolean will return true simply because it's a declared string 
console.log(Boolean("false"));

// Avoid using the boolean object as a constructor, since it creates an object that returns a boolean value, not a bool primitive
const falseBool = Boolean(0);
const falseObject = new Boolean(0);

console.log(falseBool);
console.log(falseObject);

console.log(falseObject.valueOf());

console.log(falseBool == true);
console.log(falseObject == true);

// The null keyword is used to intentionally state that a value that is defined is absent

// Gets the object type of null, it'll equal to an object because it's a keyword
console.log(typeof null);

// Undefined is a primitive value assigned to variables that just got declared or
// to the resulting value of an operation doesn't return a meaningful value

// This function below will return undefined because I'm not returning and declaring anything here
// I'm just stating the function's name
function what() { }

console.log(what());

// This function below will also return undefined because I'm not even returning a value here
// I only say return and Javascript doesn't understand what I'm trying to return inside the function
function returnWhat() {
    return;
};

console.log(returnWhat());

// Null represents a blank value (doesn't know what the value equals to)
// Whereas undefined represents a lack of assigned value

// Null and undefined are loosely equal but not strictly equal (hence why == will return true)
// The loose equality operator coerces operands of different types of boolean values, making null and undefined both false
console.log(null == undefined);

// The strict equality operator considers operands of different data types to be unequal
console.log(null === undefined);

// BigInt is a new primitive that allows any math operation to exceed outside of the range of the Number object
// Create a BigInt variable by passing in the n keyword after the big number

const myNum = 9999999999999999;
const myBigNum = 9999999999999999n;

console.log(typeof myNum);
console.log(typeof myBigNum);

console.log(myNum);
console.log(myBigNum);

/* This below will return an error because Javascript won't be able to convert a BigInt variable with an 
actual number on an arthmetic operation */

//console.log(myBigNum + 2);

// To be able to perform arthmetic operations using BigInts, define both operands as BigInt values

console.log(myNum + 10); // This will return a value that is off by 1
console.log(myBigNum + 10n);

// Variables are data structures in programming that assigns some kind of name to a value (e.g. int, string, etc.)

// This below will return an error because variables can't start with digits

//let 2re = true;

// This below will also return an error because variable indentifiers can't be all numbers
// Causes a conflict with the program interpreting the number as either a number or an identifier

//let 8 = 16;

// This works because the variable interprets the word below as an indentifier 
let osamaBeingABetterProgrammer = true;

// In Javascript, variables can be declared using let, const (for making a variable impossible to modify) and var

// Use a single = sign when declaring a variable to assign/reassign a value to it
let myVariable = 4;

console.log(myVariable);
console.log(myVariable + myVariable + myVariable); // Can also add the same declared variables together

// A variable can be declared without assigning a value to it right away

let osamaVariableBeDefined;

// This below will return an undefined keyword because I didn't initialize any value inside my variable above
console.log(osamaVariableBeDefined);

// Return my value of 23 and it will print the value to the console below
osamaVariableBeDefined = 23;

console.log(osamaVariableBeDefined);

// This below will return an error because I never declared the variable at all by using let, const or var

//myVariableNotDeclared;

// Variables can be associated together to create a "binding" but only followed by a let, const or var keyword

let me1, me2, me3, me4;

// Or let me1; let me2; let me3; let me4;

// Javascript allows you to reassign a value without the let or var keyword as long as it knows the variable's name
// Javascript also allows reassigning variables new values based on their existing value

console.log(osamaVariableBeDefined = osamaVariableBeDefined - osamaVariableBeDefined);

// A variable name can't be redeclared more than once because the program will throw a redeclaration of let error

//let meVar = true;
//let meVar = false;

// But Javascript is fine with redeclaration of variables using the var keyword

var meVar = true;
var meVar = false;

console.log(meVar);

// Use the const keyword to declare a constant, initialize the value right away and then can't be modified

const itsAllTrue = true;

console.log(itsAllTrue);

// An undeclared constant variable will throw an error because it can't be reassigned afterwards

// Returns SyntaxError: Missing initializer in const declaration below
//const suffer;

// Changing the value of a constant variable will throw a type error
//const suffered = false;

// Returns Uncaught TypeError TypeError: Assignment to constant variable error
//suffered = true;

// However, when a constant is associated with an object, the properties of the object can be modified

const constantObject = { "Osama1": true };

//console.log(constantObject);

constantObject.Osama2 = false;

console.log(constantObject);

// A constant that contains an object is an immutable reference to a mutable data value

//constantObject = false;

// When you don't expect a variable to be reassigned, make the variable a constant (not to change the value)

// A variable that is declared inside the block statement will work (but not outside of the block statement)
{
    let osamaBlock = true;
    console.log(osamaBlock);
}

// This below will return an error because it doesn't know where this variable below is declared
//osamaBlock

{
    const myConstant = false;
}

// Declaring the same variable outside of the block will work the same way as declaring it inside the block statement
const myConstant = true;
console.log(myConstant);

// A declared variable can't be extended to its parent block but it's available to its descendant blocks

{
    let osamaBlock2 = true;
    {
        console.log("osamaBlock2 = " + osamaBlock2);
    }
}

// The value of a declared variable can be changed inside the descendant blocks
{
    let thisThing = false;
    {
        thisThing = true;
    }
    console.log("thisThing = " + thisThing);
}

// An indentifier will the same variable name inside the descendant block won't throw an error
{
    let scopeMe = false;
    {
        // This won't throw an error, but looks like the program won't try to read this value (inside this block)
        let scopeMe = true;
    }

    console.log(scopeMe);
}

// Variables declared using var are scoped to their closest containing function (or a static intialization block)
function functionScope() {
    var scopedFunction = true;

    return scopedFunction;
}

// Returns an error below because this is undefined (even if it's a returned variable inside a function)
//scopedFunction;

// The console can print to the console the function that has a return value
console.log(functionScope());

// Global variable below
var functionGlobal = true;
let blockGlobal = true;

{
    // Print the global variables inside this parent block here
    console.log("functionGlobal = " + functionGlobal);
    console.log("blockGlobal = " + blockGlobal);
}

// Parent function here
(function () {
    // Print the global variables inside this parent function here
    console.log("functionGlobal = " + functionGlobal);
    console.log("blockGlobal = " + blockGlobal);
}());

function declareMyVariableHere() {

    // Assigning a value to a variable without explicitly declaring it using let, var or const to create
    // Makes the variable a global scope, even if it's initialized inside a function or a block
    // A variable of this type is sometimes called an implied global (since it only applies to a function/block)

    globalVariable = "global variable!";

    return globalVariable;
}

console.log(declareMyVariableHere());

// Variable and function declarations are hoisted to the top of their scope, meaning that Javascript interpreter
// processes any variable declared at any point in a script and moves it to the first line of the enclosing scope
// before executing the script.
// Basically, a variable can be declared using var reference without having to declare it without running into an error.
var hoistedVariable;

// The variable above is a hosted variable not an initialization makes the variable that never got declared with var,
// let, or const aren't hoisted

unhoistedVariable = true;
console.log("unhoistedVariable = " + unhoistedVariable);

// Strict equality operator to compare 2 operands: the expression 1+4 and the value 5
// Because the expression and number value are the same, the expression will evaluate to true
console.log("1 + 4 === 5: " + (1 + 4 === 5));

// == loose equality and === strict equality
console.log("3 == 3: " + (3 == 3));
console.log("3 == '3': " + (3 == "3"));

// The same is true of !=, which returns true if the operands being compared aren't loosely equal
console.log("1 != 4: " + (1 != 4));
console.log("12 != '12': " + (12 != "12"));

// All values in Javascript are implicitly true or false, and can be coerced to the corresponding boolean value
// A limited set of values coerce to false include 0, null, undefined, NaN and an empty string ("")
console.log("'Osama' == true: " + ("Osama" == true));
console.log("100 == true: " + (100 == true));
console.log("0 == true: " + (0 == true));

// Logical operators include & (AND), | (OR), and ! (NOT)
console.log("3 === 1 || 4 === 4: " + (3 === 1 || 4 === 4)); // Returns true because one of conditional statements is true
console.log("4 === 4 || 4 === '4': " + (4 === 4 && 4 === "4")); // Returns false because there is a numbered string data here
console.log("1 == 1 && !'Osama': " + (1 == 1 && !"Osama")); // Returns false because there is a string printed here

console.log("true: " + true); // Returns true because there is a true boolean here without the !
console.log("!true: " + !true); // Returns false because the ! means NOT and we're saying it's not true
console.log("!false: " + !false); // Returns true because the ! means NOT and we're saying it's not false

// Using a logical ! (NOT) operator in front of a data type will coerce that value to a boolean and reverse the boolean
console.log("Osama");
console.log("!Osama: " + !"Osama");
console.log(0);
console.log("!0: " + !0); // This will reverse the boolean value to true because 0 equals to false and we have a ! operator

// The & (AND) logical operator returns true if two or more conditional statements all return true
// But will return false if one of the logical AND conditions returns false (e.g. 4 === 5 && "Me" returns false)
console.log("true && false: " + (true && false));
console.log("false && true: " + (false && true));
console.log("false && false: " + (false && false));
console.log("true && true: " + (true && true));

// If the & (AND) operator is used with 2 non-boolean operators, the first operand will return unchanged if it is coerced to false
// If the first operand is coerced to true, then the second operand will return unchanged
console.log("false && 'SpongeBob': " + (false && "SpongeBob"));
console.log("null && 'SpongeBob': " + (null && "SpongeBob"));
console.log("'SpongeBob' && false: " + ("SpongeBob" && false));
console.log("'SpongeBob' && 'Patrick': " + ("SpongeBob" && "Patrick"));
console.log("30 === 30 && 'SpongeBob': " + (30 === 30 && "SpongeBob"));

// The | (OR) logical operator returns true only one of the 2 operands only if that operand is equal to true
console.log("false || true: " + (false || true));
console.log("true || false: " + (true || false));
console.log("true || true: " + (true || true));
console.log("false || false: " + (false || false));

// If the | (OR) operator is used with 2 non-boolean operators, the first operand will return unchanged if it is coerced to true
// If the first operand is coerced to false, then the second operand will return unchanged
console.log("false || 'Squidward': " + (false || "Squidward"));
console.log("null || 'Squidward': " + (null || "Squidward"));
console.log("'Squidward' || false: " + ("Squidward" || false));
console.log("'Squidward' || 'Mr. Krabs': " + ("Squidward" || "Mr. Krabs"));
console.log("11 === 11 || 'Krusty Krab': " + (11 === 11 || "Krusty Krab"));

// The nullish coalescing operator ?? returns the first operand only if that operand has any value other than null or undefined
// Otherwise, the ?? returns the second operand
console.log("null ?? 'Dwayne 'The Rock' Johnson': " + (null ?? "Dwayne 'The Rock' Johnson"));
console.log("undefined ?? 'Dwayne 'The Rock' Johnson': " + (undefined ?? "Dwayne 'The Rock' Johnson"));
console.log("true ?? 'Dwayne 'The Rock' Johnson': " + (true ?? "Dwayne 'The Rock' Johnson"));
console.log("0 ?? 'Dwayne 'The Rock' Johnson': " + (0 ?? "Dwayne 'The Rock' Johnson"));
console.log("false ?? 'Dwayne 'The Rock' Johnson': " + (false ?? "Dwayne 'The Rock' Johnson"));

// Use the assignment operators to assign the value of the second operand to a first operand (e.g. =)
// Use logical assignment operators to conditionally assign a value to a variable based on true or false value of that variable
// The logical AND assignment (&&=) operator evaluates the second operand and assigns it to the first operand
// But only if the first operand is evaluated to true (or if the first operand is true, assign it the value of the second operand instead)
let thisAssignmentLogic = false;
console.log("thisAssignmentLogic &&= 3 + 3: " + (thisAssignmentLogic &&= 3 + 3));

thisAssignmentLogic = true;
console.log("thisAssignmentLogic &&= 3 + 3: " + (thisAssignmentLogic &&= 3 + 3));

// If the &&= assignment operator has a comparsion operator, then it will return true or false
// Meaning that the value cannot be assigned and will return an error (SyntaxError: Invalid left-hand side in assignment)

/*let thisComparsionLogic = 4;
thisComparsionLogic < 19 &&= "I am a comparsion logic!";*/

// The logical OR (||=) assignment operator evaluates the second operand and assigns it to the first operand
// But only if the first operand is evaluated to false (or if the first operand is false, assign it the value of the second operand instead)
let thisAssignmentLogic2 = false;
console.log("thisAssignmentLogic2 ||= 5 + 4: " + (thisAssignmentLogic2 ||= 5 + 4));

thisAssignmentLogic2 = true;
console.log("thisAssignmentLogic2 ||= 5 + 4: " + (thisAssignmentLogic2 ||= 5 + 4));

// An if statement evaluates a condition inside the matched parentheses that follow
// If the condition evaluates to be true, the statement or block statement that follows the matched parentheses is executed
if (true) console.log("True.");

if (true) {
    const thisString = "This string is true."
    console.log(thisString);
}

// If the condition inside the parentheses evaluates to be false, the statement that follows it will be ignored
if (false) console.log("True.");

/* An else keyword immediately following an if statement and its conditionally-executed statement specifies the statement
to be executed if the if condition evaluates to false */
if (false) console.log("True.");
else console.log("False.");

/* To chain multiple if statements together, you can make the conditionally-executed statement following else another
if statement like so */
const osamaCondition = 16;

if (osamaCondition === 20) console.log("Hi there, Osama's condition is equal to 20!");
else if (osamaCondition === 16) console.log("Hi there, Osama's condition is equal to 16!");

// Using block statement syntax following conditionals helps improve readability of the code
if (osamaCondition === 36) {
    console.log("Hi there, Osama's condition is equal to 36!");
} else if (osamaCondition === 18) {
    console.log("Hi there, Osama's condition is equal to 18!");
} else {
    console.log("Hi there, Osama's condition is not equal to 36 or 18!");
}

// The ternary operator is shorthand used to conditionally execute an expression

/* The ternary operator is the only Javascript operator that uses 3 operands: 
A condition to be evaluated, followed by a question mark (?) 
The expression to execute if the condition evaluates to true, following a colon (:) 
The expression to execute if the condition evaluates to false */

// The ternary operator is frequently used to conditionally set a value
const resultOne = true ? "First value." : "Second value.";
const resultTwo = false ? "First value." : "Second value.";

console.log(resultOne);
console.log(resultTwo);

/* Use the switch statement to compare the value of an expression to a list of potential values defined using one or 
more case keywords */

// The switch case will execute a command only if the case follows the switch statement
switch (21 + 34 === 55) {
    case false:
        console.log("21 + 34 != 55");
    case true:
        console.log("21 + 34 == 55");
}

switch (11 + 14 === 25) {
    case false:
        console.log("11 + 14 != 25");
    case true:
        var thisString = "11 + 14 == 25";
        console.log(thisString);
}

/* The problem with the switch... case statement is that after a match is found, Javascript interpreter executes any
statement that follow the matched case, including the other case statements. It's called "falling through" to the next case */
switch (1 + 12 === 42) {
    case false:
        console.log("1 + 12 != 42");
    case true:
        console.log("1 + 12 == 42");
}

// End each case statement will a break keyword to avoid falling through to the next case
// The break statement helps to stop the switch body evaluation from immediately going to the next case
switch (71 + 34 === 122) {
    case false:
        console.log("71 + 34 != 122");
        break;

    case true:
        console.log("71 + 34 == 122");
        break;
}

// If no case statement matches the conditional value, then the switch will select the default statement and execute it
switch (13) {
    default:
        console.log("This value is unexpected!");
        break;
    case 7:
        console.log("This value is 7!");
        break;
    case 14:
        console.log("This value is 14!");
        break;
    case 20:
        console.log("This value is 20!");
        break;
}

/* Because case statements don't require a block statement for grouping multiple statements, case and default statements
don't create lexical scopes by themselves */

// To manage lexical scopes, create a block statement like so
let thisBe;
switch (true) {
    case true:
        {
            let thisBe = "true";
            console.log("thisBe: " + thisBe);
            break;
        }

    default:
        {
            let thisBe = "false";
            console.log("thisBe: " + thisBe);
            break;
        }
}

// Loops let you repeat a set of statements for as long as a condition is met or until a condition is met

/* Use loops to execute a set of instructions a fixed number of times, until a specific result is achieved, or until
the interpreter reaches the end of an iterable data structure (e.g. final element in an array, map, list, etc.) */

// Set the number variable and tell the console that we're beginning to loop through the number
let thisLoopedNumberBe = 0;
console.log("Before the loop begins...");

// Loop through my number only if it's less than 10
while (thisLoopedNumberBe < 10) {

    // Increment the number by a half
    thisLoopedNumberBe += 0.5;
    console.log("Looping through number: " + thisLoopedNumberBe); // Print the numbers in the loop
}

// After the loop is over, write this to the console
console.log("This loop ended!");

// If the loop condition isn't met during the loop's execution of the code, the loop will go on indefinitely

/* These infinite loops are a programming pitfall (risk) that can cause the main execution thread to pause indefinitely
or even crash a browser tab/the program (it's best to avoid infinite loops altogether) */

// This will execute the loop as long as the boolean value true remains true
// Since the boolean values are immutable (can't be changed), it will create an infinite loop

/*while (true) {
    // Increment the number by a half
    let thisNumber;
    thisNumber += 0.5;

    console.log("Looping through number: " + thisNumber); // Print the numbers in the loop
}*/

// A while loop is created using the while keyword followed by a pair of matched parentheses containing a condition to be evaluated
// If the specified condition initially evaluates to true, the statement that follows those parentheses will be executed
// If not, the loop never runs
// After each iteration, the condition is reevaluated, and it's still true, the loop repeats
let iterationLoop = 0;
while (iterationLoop < 4) {
    console.log(`Loop ${iterationLoop}`);
    iterationLoop++;
}

/* If the interpreter finds a continue statement in a while loop, it stops that iteration (repetition of a process),
reevaluates the condition, and continues the loop if possible */

let iterationLoop2 = -2;
console.log("Loop starting now...");

while (iterationLoop2 < 3) {
    console.log(`Loop ${iterationLoop2}`);
    iterationLoop2++;

    if (iterationLoop2 == 1) {
        console.log("This number looped through: " + iterationLoop2);
        continue;
    }
}

console.log("Loop ended!");

/* If the interpreter finds a break statement in a while loop, it stops that iteration (repetition of a process) and
won't reevaluate the condition, letting the iterpreter move on */

let iterationLoop3 = 1;
console.log("Loop starting now...");

while (iterationLoop3 <= 6) {

    if (iterationLoop3 === 4) {
        console.log("This number ended the loop at: " + iterationLoop3);
        break; // End the loop
    }

    console.log(`Loop ${iterationLoop3}`);
    iterationLoop3++;
}

console.log("Loop ended!");

/* You can use while to iterate a specified number of times, but the most common use case for while is a loop of 
indeterminate length */

let randomizedValue = () => Math.floor(Math.random() * 10);
let randomizedNumber = randomizedValue();

while (randomizedNumber !== 5) {
    console.log(`This number is not equal to 5 because this number is equal to ${randomizedNumber}`);
    randomizedNumber = randomizedValue();
}

console.log(`This number is equal to ${randomizedNumber}`);

/* Do... while is a variant of the while loop in which the conditional evaluation happens at the end of each iteration
of the loop, meaning that the body of the loop is always executed at least once */
let iterationCount = 1;
do
{
    console.log(`Loop ${iterationCount}`);
    iterationCount++;
} while (iterationCount < 4) // When this condition here is not true, the loop will end

// Just like while loops, the most common use case for do... while loop is a loop of indeterminate (indefinite) length
let thisRandomNumber;
do {
    thisRandomNumber = (() => Math.floor(Math.random() * 10))();
    console.log(`Number ${thisRandomNumber} is not equal to 4`);
} while (thisRandomNumber != 4);

console.log(`Number ${thisRandomNumber} is equal to 4`);

/* Use for loops to iterate over a known quantity. In legacy codebases, for loops are frequently used to iterate over
the elements in an array */

/* For loops are followed by a set of parentheses that accepts the following three expressions in order and seperated
by semicolons:

1. An expression to be evaluated when the for loop begins 
2. A condition that should determine when the loop should continue (until the condition is met)
3. An expression to be executed at the conclusion of each loop */
for (let num = 0; num < 4; num++) {
    console.log(`Print this number: ${num}`);
}

var myArray = ["Osama1", "Osama2", "Osama3"];
for (let i = 0; i < myArray.length; i++)
{
    console.log(`Print myArray: ${myArray[i]}`);
}

// A for... of loop iterates over the values stored in an iterable data structure (e.g. set, map, array)

/* A for... of loop uses the for keyword followed by a set of parentheses containing a variable, followed by a of, 
then the data structure being iterated over */
let osamaForOfLoop = ["Osama for of loop 1", "Osama for of loop 2", "Osama for of loop 3"];

// Variables declared with let or const are scoped to the block statement within the loop
for (let thisLoop of osamaForOfLoop)
{
    console.log(thisLoop);
}

// Use for... in loops to iterate over the enumerable properties of an object, including enumerable inherited properties

/* A for... in loop uses the for keyword followed by a set of parentheses containing a variable that contains 
the value of the property key corresponding with the current iteration of the loop */

var osamaForInLoop = {
    "Osama for in loop 1" : true, "Osama for in loop 2" : false, "Osama for in loop 3" : false
};

// Variables declared with let or const are scoped to the block statement within the loop
for (var thisKey in osamaForInLoop) {

    // The value associated with each property key isn't directly available to the for... in syntax.
    // However, because the loop has access to the property key in each iteration, you can use that key to look up its value
    console.log(`${thisKey} : ${osamaForInLoop[thisKey]}`);
}

/* Properties inherited from built-in constructors are non-enumerable, meaning that for... in loops don't iterate
through properties inherited from the Object constructor. However, any enumerable properties within the object's 
prototype's chain are included */
const thePrototype = { "prototypeProperty": true };
const theObject = Object.create(thePrototype, {
    thisProperty: {
        value: true, enumerable: true
    }
});

for (const theKey in theObject) {
    console.log(`${theKey} : ${theObject[theKey]}`);
}

/* Javascript provides built-in methods for determining whether a property is a direct property of the object 
rather than a property on the object's prototype chain: the modern Object.hasOwn() and legacy 
Object.prototype.hasOwnProperty() methods. These methods evaluate whether a specified property is inherited (or 
undeclared), returning true only for the immediate properties of a specified object */

const thePrototype2 = { "prototypeProperty2": true };
const theObject2 = Object.create(thePrototype2, {
    thisProperty2: {
        value: true, enumerable: true
    }
});

for (const theKey2 in theObject2) {
    if (Object.hasOwn(theObject2, theKey2)) {
        console.log(`${theKey2} : ${theObject2[theKey2]}`);
    }
}

/* There are also 3 static methods that each return an Array made up of an Object's enumerable keys( Object.keys() ), 
values( Object.values() ), or key-value pairs( Object.entries() ) */
const theObjectKeys = { "thisProperty1": true, "thisProperty2": false };
console.log(Object.keys(theObjectKeys));

// Iterate the Object keys, values, or key-value pairs over without including properties owned by that Object's prototype
const thePrototype3 = { "prototypeProperty3": "Non-enumerable property value." };
const theObject3 = Object.create(thePrototype3, {
    thisProperty3: {
        value: "Enumerable property value.",
        enumerable: true
    }
});

for (const theKey3 of Object.keys(theObject3)) {
    console.log(theKey3);
}

for (const theValue3 of Object.values(theObject3)) {
    console.log(theValue3);
}

for (const [theKey3, theValue3] of Object.entries(theObject3)) {
    console.log(`${theKey3} : ${theValue3}`);
}

/* The forEach() methods provided by the Array, Map, Set, and NodeList constructors provide a useful shorthand for 
iterating over a data structure in the context of a callback function. Unlike other forms of loop, a loop created with 
any forEach() method can't be interrupted using break or continue. */

/* The callback function used with Array.forEach provides parameters containing the value of the current element, 
the index of the current element, and the array the forEach method was invoked in */
const osamaArray = ["Osama, ", "time", " for", " the", " hammer!"];

osamaArray.forEach((myElement, i, originalArray) => {
    console.log(i, myElement, originalArray);
});

/* The callback function used with Map.forEach provides parameters containing the value associated with the current
element, the key associated with the current element, and the Map the forEach method was invoked in */
const osamaMap = new Map([["Osama, ", "go!"], ["Sama, ", "move!"],]);

osamaMap.forEach((thisValue, thisKey, originalMap) => {
    console.log(thisValue, thisKey, originalMap);
});

/* A Set.forEach callback includes similar parameters. Because Set doesn't have indexes or keys distinct from values, 
the second argument instead provides a redundant, ignorable value, strictly to keep the syntax consistent with the 
other forEach methods. */
const osamaSet = new Set(["Osama", "set", "the", "project"]);

osamaSet.forEach((thisValue, thisKey, originalSet) => {
    console.log(thisValue, thisKey, originalSet);
});

/* An iterable is any data structure made up of individual elements that can be iterated over using the approaches
detailed previously. An iterator is an iterable object that follows iterator protocol, which means it must implement
a next() method that advances through the elements it contains one at a time, each time that method is called, returning
an object for each sequential element in a specific format. */
const osamaIterable = [1, 2, 3];
const osamaIterator = osamaIterable[Symbol.iterator]();

console.log(osamaIterable);
console.log(osamaIterator);

/* Calling the next() method on an iterator steps through the elements it contains one at a time, with each call 
returning an object containing two properties: value, which contains the value of the current element, and done, 
a boolean that tells us if the iterator has passed the last element of the data structure. The value of done is true
only when a call to next() results in an attempt to access an element beyond the last element in the iterator. */
console.log(osamaIterator.next());
console.log(osamaIterator.next());
console.log(osamaIterator.next());
console.log(osamaIterator.next());

// Use the function* keyword to declare a generator function or define a generator function expression
function* osamaGeneratorFunction()
{
    /* Like iterators, generator functions maintain state. Calling a generator function returns a new Generator object 
    but doesn't immediately execute the code in the body of a function */
    console.log("Generate Osama's function body.");
}

const osamaGeneratorObject = osamaGeneratorFunction();
console.log(osamaGeneratorObject);
console.log(typeof (osamaGeneratorObject));

/* Generator objects follow iterator protocol. The value each call to next() on a generator function returns is 
determined by a yield expression, which pauses execution of the generator function and returns the value of the expression
that contains the yield keyword. Later calls to next() continue execution of the function, pausing at the next yield 
expression and returning the associated value. */
function* osamaYieldGeneratorFunction()
{
    // Use yield keyword in a generator function to generate a value
    yield "Osama Hussein is learning Javascript!";

    /* Use return to end a statement inside the generator's function to ensure the done boolean will be true
    and won't need to create a new Generator object every time */
    return "Osama Hussein will not give up the programming life until he knows he can succeed!";
}

const osamaYieldGeneratorObject = osamaYieldGeneratorFunction();
console.log(osamaYieldGeneratorObject.next());
console.log(osamaYieldGeneratorObject.next());

/* When next() is called after no further values are specified using yield, return, or throw (in the event of an error), 
the remainder of the function body executes, and the returned Object has a value of undefined and a done property of true */
//console.log(osamaYieldGeneratorObject.next()); // Like my example here

/* Use next() only on the Object the generator function returns, not the generator function itself. Otherwise, each 
call to the generator function creates a new Generator object. */

/* As with any function, the generator function halts when it encounters a return keyword. It then returns an Object 
to the invoking context that contains the returned value and a done property with the value true. */

/* A yield expression can take on some of the semantics of an identifier, allowing two-way "communication" from and 
back to the suspended portion of the generator function. When a value is passed to a generator's next() method 
as an argument, it replaces the value associated with the previous, suspended yield expression. */
function* generatorFunction2() {
    const firstYield = yield;
    yield firstYield + 10;
};

const generatorObject2 = generatorFunction2();
console.log(generatorObject2.next());
console.log(generatorObject2.next(8));

/* Bear in mind that this replaces the entire expression associated with the previous yield, and doesn't just reassign 
the value of the previous yield to the value specified in next() */
function* generatorFunction3()
{
    const firstYield = yield;
    const secondYield = yield firstYield + 100;
    yield secondYield + 10;
};

const generatorObject3 = generatorFunction3();
console.log(generatorObject3.next());
console.log(generatorObject3.next(11));
console.log(generatorObject3.next(22));

/* Any argument passed to the first call to next() is ignored, because there's no previous yield expression to accept 
that value. As with any other function, arguments passed to the initial generator function call are available throughout 
the scope of the generator function's body. */
function* generatorFunction4(value_) {
    let newValue = yield value_ + 1;
    newValue = yield newValue + 10;
    yield value_ + 20;
};

const generatorObject4 = generatorFunction4(2);
console.log(generatorObject4.next(1));
console.log(generatorObject4.next(5));
console.log(generatorObject4.next(10));

/* The yield* operator is used with an iterable, such as another generator function, to iterate over and yield each 
value its operand returns. */
function* secondaryGenerator() {
    yield 4;
    yield 6;
}

function* generatorFunction5() {
    yield 2;
    yield* secondaryGenerator();
    yield 6;
    return 7;
}

const generatorIterator = generatorFunction5();
console.log(generatorIterator.next());
console.log(generatorIterator.next());
console.log(generatorIterator.next());
console.log(generatorIterator.next());
console.log(generatorIterator.next());

/* A Promise is a placeholder for a value that isn't known when the promise is created. It's a container that dictates 
an asynchronous operation, the terms by which the operation is considered a success or failure, the actions to be taken 
in either case, and the value that results. */

/* The Promise constructor function accepts a function called the executor as an argument. That executor function is 
typically used to perform one or more asynchronous actions, then dictate the terms by which the Promise should be 
considered successfully fulfilled or rejected. A Promise is defined as pending while the executor function is running. 
After the executor finishes, a Promise is considered fulfilled (or resolved, in other documentations) if the executor 
function and asynchronous action it performs are completely successfully, and rejected if the executor function 
encounters an error, or the asynchronous action being performed fails. After a Promise if fulfilled or rejected, it's
considered settled. */

/* The constructor calls the executor function with two arguments. Those arguments are functions that let you 
manually fulfill or reject the Promise */

/* The functions used to fulfill or reject a Promise are called with the resulting value of the Promise as an 
argument (typically an error for rejection) */
const osamaPromise = new Promise((fulfill, reject) => {
    const osamaResult = true;

    if (osamaResult === true) {
        fulfill("This promise was fulfilled!");
    } else {
        reject(new Error("This promise was rejected!"));
    }
});

console.log(osamaPromise);

/* The resulting Promise object can be acted on using the then(), catch(), and finally() methods inherited from the 
Promise constructor. Each of these methods returns a Promise, which can immediately be acted on with then(), catch(), 
or finally() again, letting you chain the resulting Promises. */

/* then() provides two callback functions as arguments. Use the first to fulfill the resulting Promise, and the second 
to reject it. Both methods accept a single argument that gives the resulting Promise its value. */
osamaPromise.then(successfulResult => console.log(successfulResult), failedResult => console.log(failedResult));

/* You can also use then() to handle only the fulfilled state, and catch to handle the rejected state. Call catch with 
a single argument containing the value provided in the Promise's rejection method. */
osamaPromise
    .then(successfulResult => console.log(successfulResult))
    .catch(failedResult => console.log(failedResult))
    .finally(() => console.log("The promise has been settled!"));

/* Unlike then and catch, which allow a handler function to run when a Promise is fulfilled or rejected, a function 
passed as an argument to the finally method is called regardless of whether the Promise was fulfilled or rejected. 
The handler function is called with no arguments, because it's not intended to work with the values passed from the 
Promise, only to execute code after the Promise is complete. */

/* The Promise constructor provides 4 methods for working with multiple related Promises, using an iterable containing 
Promise objects. These methods each return a Promise, which is fulfilled or rejected based on the state of the Promises 
passed to it. Promise.all(), for example, creates a Promise that is fulfilled only if every Promise passed to that 
method is fulfilled. */
const promise1 = new Promise((fulfill, reject) => fulfill("Successful!"));
const promise2 = new Promise((fulfill, reject) => fulfill("Successful!"));
const promise3 = new Promise((fulfill, reject) => fulfill("Successful!"));
const failedPromise = new Promise((fulfill, reject) => reject("Failed!"));
const successfulPromises = [promise1, promise2, promise3];
const oneFailedPromise = [failedPromise, ...successfulPromises];

Promise.all(successfulPromises)
    .then((allValues) => {
        console.log(allValues);
    })

    .catch((failValue) => {
        console.log(failValue);
    });

Promise.all(oneFailedPromise)
    .then((allValues) => {
        console.log(allValues);
    })

    .catch((failValue) => {
        console.log(failValue);
    });

/* The Promise concurrency methods are as follows: 

Promise.all() - fulfilled only if all supplied Promises are fulfilled

Promise.any() - fulfilled if any one of the supplied Promises are fulfilled, and rejected only if all Promises are 
rejected 

Promise.allSettled() - fulfilled when Promises have settled, regardless of their result 

Promise.race() - rejected or fulfilled based on the result of the first Promise to settle, ignoring all Promises settled 
later 
*/

/* When you use the async keyword before a function declaration or function expression, any value that function returns 
is returned as a fulfilled Promise containing that value. This lets you run and manage asynchronous operations using 
the same workflows as synchronous development. */
async function osamaAsyncFunction()
{
    return "This is Osama's async function.";
}

osamaAsyncFunction().then(thisReturnedValue => console.log(thisReturnedValue));

/* The await expression pauses the execution of an asynchronous function while the associated Promise is settled. After 
the Promise is settled, the value of the await expression is the fulfilled or rejected value of the Promise. */
async function osamaAsyncFunction2()
{
    const osamaPromise = new Promise((fulfill, reject) => fulfill("Osama's async function 2 was successful!"));
    const osamaPromisedResult = await osamaPromise;
    return osamaPromisedResult;
}

osamaAsyncFunction2()
    .then(thisResult => console.log(thisResult))
    .catch(thisFailedResult => console.log(thisFailedResult));

// Any non-Promise value included in an await expression is returned as a fulfilled Promise
async function osamaAsyncFunction3()
{
    const osamaPromisedResult = await "Osama's promise value!";
    return osamaPromisedResult;
}

osamaAsyncFunction3()
    .then(thisResult => console.log(thisResult))
    .catch(thisFailedResult => console.log(thisFailedResult));



// Found out about the set timeout function at: https://stackoverflow.com/questions/18503001/node-js-console-gets-closed-immediately-after-i-execute-the-program-from-visual
setTimeout(function () {
    process.exit();
}, 5000);