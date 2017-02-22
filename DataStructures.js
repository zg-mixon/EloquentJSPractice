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

// Muatability Explanation - Mutability is the possibility to change a variable's value to be a certain thing
// Immutability Explanation - Immutability is the impossibility to change a variable's value - JS's naturally immutable
// types are strings, numbers, booleans
// Objects value's are mutable and thus can be changed

var object1 = {value : 10};
var object2 = object1;
var object3 = {value : 10};

console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);

// Below code block sets up a journal array to hold entries that are objects of events and a boolean that reads true or
// false based on whether or not the transformation into weresquirrel took place that day. Will eventually be used to
// calculate a co-efficiency of influence on what event during the day has an influence of the transformation process
// with a range of -1 to 1 with -1 being an opposite (-1 being when this happens the transformation never takes place)
// and 1 being a true correlation (1 being when this happens, I always turn)

var journal = [];

function addEntry(events, didITurnIntoASquirrel) {
    journal.push({
        events : events,
        squirrel : didITurnIntoASquirrel
    });
}

addEntry (["work" , "touched tree", "pizza", "running",
"television"] , false );
addEntry (["work" , "ice cream", "cauliflower", "lasagna",
"touched tree", "brushed teeth"] , false );
addEntry (["weekend" , "cycling" , "break", "peanuts",
"beer"] , true );

// Comment to test new git credential settings