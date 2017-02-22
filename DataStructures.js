/**
 * Created by kotria on 2/22/17.
 */

// Basic array example down below, zero indexed as all other arrays I have dealt with are
var listOfNumbers = [2, 3, 5, 7, 11];

// Never realized you could do the below where you take the value of your index and perform maths on it to receive the
// index you're looking for
console.log(listOfNumbers[1 - 1]);

var day1 = {
    squirrel : false,
    events : ["work", "touched tree", "running", "pizza", "television"]
};

// Example of accessing properties of an object through dot notation
console.log(day1.events[3]);

// Delete is a way to delete a portion of an object, example below
delete day1.squirrel;

// Checking to see if squirrel array is still in the day1 object. Should return false.. Returned undefined. Makes sense
console.log(day1.squirrel);

// Example below of an array of objexts containing an array. Access through syntax: journal[x].variable[x]
var journal = [
    {
        events : ["work", "touched tree", "pizza", "running", "television"],
        squirrel : false
    },
    {
        events : ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
        squirrel : false
    },
    {
        events : ["weekend", "cycling", "break", "peanuts", "beer"],
        squirrel : true
    }
];

console.log(journal[1].events[2]);
