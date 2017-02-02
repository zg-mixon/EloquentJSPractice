/*** Created by Zach Mixon on 2/1/2017. ***/

/*** All code blocks can be uncommented to be tested, comments added for clarity of purpose for each code block so I
 * can personally come back to it for studying and understanding
 */


//If Else practice example, has basic error handling by checking correct value entry (uncomment to try out code block)
/* var theNumber = Number(prompt("pick number, any number \(between one and ten..)" , ""));

if (!isNaN(theNumber))
    alert("Your number is the square root of " + theNumber * theNumber);
else
    alert("Hey! Why didn't you give me a number? \>\:\(");
*/

//if, else if and if chaining example (uncomment to try out code block)
/* var num = Number(prompt("Pick a number", "0"));

if (num < 10)
    alert("small");
else if (num < 100)
    alert("Medium");
else
    alert("LARGE");
*/

//Basic looping example to print out only whole numbers from 0 to 12 (uncomment to try out code block)
/* var number = 0;
while (number <= 12) {
    console.log(number);
    number = number += 2
}
*/

//Shows capabilities of looping to calculate something more complex than simple addition i.e. incrementing 2 to the
// power of 10 (uncomment to try out code block)
/* var result = 1;
var counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
    console.log(result);
}
*/

//Do While loop example (Do loop is different from while loop in that it will always iterate at least once)(uncomment to
// try out code block)
/* do {
    var yourName = prompt("who are you?");
} while (!yourName);
console.log(yourName);
*/

//Basic for loop example of achieving the same result as the previous exponential for loop (uncomment to try out code
// block)
/* var result = 1;
for (var counter = 0; counter < 10; counter++){
    result = result * 2;
    console.log(result);
}
*/

//Breaking out of a loop example, also first example of modulo (uncomment to try out code block)
/* for (var current = 20; ; current++) {
    if(current % 6 == 0){
        break;
    }
}
console.log(current);
*/

//Switch example, I find this a bit weird and obtuse even though the visual code structure makes sense. The lack of
// a break on the sunny case is so that it will suggest go outside for both the cloudy and sunny responses. (uncomment to
// try out code block)
/* switch (prompt("What is the weather like?")) {
    case "rainy":
        console.log("Remember to bring and umbrella!");
        break;
    case "sunny":
        console.log("Dress lightly.");
    case "cloudy":
        console.log("Go outside!");
        break;
    default:
        console.log("Unknown weather type!");
        break;
}
*/

//Practice Problem - Create loop that will create a create a triangle out of # signs, first try correct

/* var pound = "#";

for (var i = 1; i <= 7; i++) {
    console.log(pound);
    pound = pound + "#";
}
*/

//FizzBuzz Program, Second try, forgot about sequence of if, else if, else statements mattering, had to move
// divisibility check to print out FizzBuzz to the first if so it would work, nice reminder

/* var number = 0;
for(var i = 1; i <= 100; i++) {
    number++;
    if (number % 3 == 0 && number % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if(number % 3 == 0) {
        console.log("Fizz");
    }
    else if (number % 5 == 0){
        console.log("Buzz");
    }
    else console.log(number);
}
*/

//Chess Board Program - Had to look up working solution, but after playing with the answer, I understand what's going on. A parent for loop only iterates once for every full condition fulfillment
// loop through of a child loop, which is in this case, 8 times. The alternating of the first character between space and # sign on the new lines is achieved because the value of x is changed
// after every iteration of the parent loop and thus creates a different starting value of x + y in the child loop. Did not figure this one out, but did learn something from cheating, which I
// guess is good :)

/*
var size = 8;
var chessString = "";

for (var x = 0; x < size; x++) {
    for (var y = 0; y < size; y++) {
        if ((x + y) % 2 == 0) {
            chessString += " "
        }
        else {
            chessString += "#";
        }
    }
    chessString += "\n";
}

console.log(chessString);

*/

//Test to see if new line character addition worked in earlier versions of the frustrating Chess problem above
/*
var newLineTest = "Cat\nFell\nDown\nA\nWell";

console.log(newLineTest);
 */