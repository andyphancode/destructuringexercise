// What does the following code return/print?

// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); // ?
// console.log(yearNeptuneDiscovered); // ?

// ----------------------------------------------------------------------------------------------------------------------------------------
// It will print 8 and 1846.
// ----------------------------------------------------------------------------------------------------------------------------------------

// What does the following code return/print?

// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };

// let {numPlanets, ...discoveryYears} = planetFacts;

// console.log(discoveryYears); // ?

// ----------------------------------------------------------------------------------------------------------------------------------------
// It will print an object containing the key/value pairs of everything but numPlanets.
// ----------------------------------------------------------------------------------------------------------------------------------------

// // What does the following code return/print?

// function getUserData({firstName, favoriteColor="green"}){
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }

// getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
// getUserData({firstName: "Melissa"}) // ?
// getUserData({}) // ?

// ----------------------------------------------------------------------------------------------------------------------------------------
// The first function call will print `Your name is Alejandro and you like purple`, the second will be Melissa and green in the same fashion, the third 
// will be undefined and green. 
// ----------------------------------------------------------------------------------------------------------------------------------------

// What does the following code return/print?

// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first); // ?
// console.log(second); // ?
// console.log(third); // ?

// ----------------------------------------------------------------------------------------------------------------------------------------
// Maya, Marisa, and Chi in that order, individually and on each line.
// ----------------------------------------------------------------------------------------------------------------------------------------


// What does the following code return/print?

// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   "Raindrops on roses",
//   "whiskers on kittens",
//   "Bright copper kettles",
//   "warm woolen mittens",
//   "Brown paper packages tied up with strings"
// ]

// console.log(raindrops); // ?
// console.log(whiskers); // ?
// console.log(aFewOfMyFavoriteThings); // ?

// ----------------------------------------------------------------------------------------------------------------------------------------
// The first print is "Raindrops on roses", second is "whiskers on kittens", 
// third is an array of "Bright copper kettles, warm woolen mittens, Brown paper packages tied up with strings"
// ----------------------------------------------------------------------------------------------------------------------------------------

// What does the following code return/print?

// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

// console.log(numbers) // ?

// ----------------------------------------------------------------------------------------------------------------------------------------
// It returns an array of [10,30,20].
// ----------------------------------------------------------------------------------------------------------------------------------------


// ES 5

// var obj = {
//     numbers: {
//       a: 1,
//       b: 2
//     }
//   };
  
//   var a = obj.numbers.a;
//   var b = obj.numbers.b;

// ES2015 version

const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

let {numbers: {a, b}} = obj;

// ES5 Array Swap

// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

// ES2015 Version

const arr = [1,2];

[arr[0], arr[1]] = [arr[1],arr[0]];


// Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});

