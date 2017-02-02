/**
 * Created by Zach Mixon on 2/1/2017.
 */

//Super basic function
/*
var square = function(x) {
    return x * x;
}
console.log(square(12));
*/

//Function with no parameters
/*
var blam = function () {
    console.log("splat");
};

blam();
*/

//Function with two parameters
/*
var power = function(base, exponent) {
    var result = 1;
    for (var count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power(2, 10));
*/

//Examples of scope in javascript functions
/*
var x = "outside";

var f1 = function() {
    var x = "inside f1";
};
f1();
console.log(x);
*/
//Above logs outside, the global declaration of the variable x on line 37, tramples over the internal declaration of x made inside the function named f1

//The below function does not have a global declaration to compete with, so after calling f2(), the x declared inside of it is now logged
/*
var f2 = function() {
    x = "inside f2";
};
f2();
console.log(x);
*/

//Humorous example of recursion gone wrong and filling up a call stack (DO NOT RUN!)
/*
function chicken() {
    return egg();
}
function egg() {
    return chicken();
}
console.log(chicken() + " came first.");
*/

//Example of optional arguments, easy, but sort of sloppy way to define default values for arguments
/*
function power(base, exponent) {
    if (exponent == undefined) {
        exponent = 2;
    }
    var result = 1;
    for (var count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log(power(4));
console.log(power(4, 3));
*/

//Closure example in JS, wrap 1 and wrap 2 keep their value since they are storing the result of the return of a variable enclosed in a function in a variable. Many variables can point to the same
// value, but making many variables of the same name will overwrite them in sequential order
/*
function wrapValue(n) {
    var localVariable = n;
    return function() {
        return localVariable;
    };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2)
console.log(wrap1());
console.log(wrap2());
*/

//Hacky way that closure quirks in JS can work to your advantage: when you assign the multiplier function to the below declared variable twice, it takes the argument in its variable declaration,
// in this case the number 2, as the factor argument for multiplier. So whenever twice is called, it uses its already specified argument for multiplier, calls the multiplier function and passes
// down the argument given to the unnamed function's argument number, which calls the function and asks it to return number * factor; or 2 * 5 in this case. Weird stuff.
/*
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

var twice = multiplier(2);
console.log(twice(5));
*/

//Basic Recursion Example, I don't get it... I GET IT AND IT'S SOOOOO COOL What the fuck this is complicated shit, looping, much more sense making. So, you basically stack the repeated calls on
// top of each other until the argument being subtracted on each call finally reaches zero, at which point the whole fucking function evaluates to 1 because of the return 1 inside of the if
// statement. Then you take that 1 and use it as the value of power and carry out base * power() or in simpler more applicable terms to the function below: 1 * 2. The product of that call of your
// function (call number two of the total three in the stack) takes its evaluated value (2) and multiplies itself by base (2) to give you a final evaluated value of 4 on the second call of
// power(). On your first call you take the evaluated value of the previous call (4) and multiply it by base (2) to receive a final evaluated value for power that equals MOTHAFUCKIN 8 in all its
// glory.
//
// TLDR; Recursion happens when a function calls itself inside of itself. This creates a stacking of function calls that will be evaluated in reverse order with the last call (or first value)
// in the reflected stack evaluation always being 1 and then proceeding to take action on the previous stacked or queued functions a la 1 * 2 = 2 * 2 = 4 * 2 = 8 * 2 = 16 ad infinitum with the
// completed calls value being the variable needed to complete the equation.

/*
function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    }
    else {
        return base * power(base, exponent - 1);
    }
}

console.log(power(2, 4));
*/

//Exercises

//Build your own math.min(), Ez-pz, the next one is on recursion and I think I'm screwed.
/*
function minimum(num1, num2) {
  if(num1 > num2) {
      return num2;
  }
  else {
      return num1;
  }
};

console.log(minimum(12, 4));

console.log(minimum(-14, 32));
*/

//Create recursive function to check if argument is even or odd
/*
var even = 0;
var odd = 1;

function isEven(n) {
    if (n == even) {
        return true;
    }
    else if (n == odd) {
        return false;
    }
    else {
        return n > 0 ? isEven(n-2) : isEven(n+2);
    }
}

console.log(isEven(13));
*/

//Check if word contains uppercase B
/*
function countB(word) {
    var bCount = 0;
    for (var i = 0; i < word.length; i++) {
        if (String(word).charAt(i) == "B") {
            bCount++
        }
    }
    console.log(bCount);
}

countB("BabbBBlingBafoon");
*/


