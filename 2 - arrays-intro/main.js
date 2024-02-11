// const yellowFruit = "Banana"
// const orangeFruit = "Orange"
// const redFruit = "Apple"
// const greenFruit = "Watermelon"
// const blueFruit = "Blueberry"

const fruits = ["Banana", "Orange", "Apple", "Watermelon", "Blueberry"]

console.log(fruits)

const dishes = [
    "Dinner plate", "Water glass", "Salad bowl",
    "Dinner plate", "Wine glass", "Spoon",
    "Spoon", "Fork", "Salad bowl", "Whiskey glass",
    "Fork", "Spoon", "Fork"
]

/*
    Declare three variables to store the string value
    of a glass in the array. Use the correct index to
    get the right value.
*/

const dirtyGlasses1 = dishes[1]
const dirtyGlasses2 = dishes[4]
const dirtyGlasses3 = dishes[9]

console.log("I am cleaning the following glasses:")

// Put each variable in one of the parenthesis below
console.log(dirtyGlasses1)
console.log(dirtyGlasses2)
console.log(dirtyGlasses3)

// ------------------------------------------------------//
// // In software, values don't only have to be assigned individually to variables.
// const flower1 = "Tulip"
// const flower2 = "Rose"
// const flower3 = "Daffodil"
// const flower4 = "Daisy"

// // You can spot an array in code by seeing some comma-delimited values separated by commas, which are all surrounded by two square brackets: the [ and the ] characters.
// // Here is an array of those four flowers.
// const flowers = [ "Tulip", "Rose", "Daffodil", "Daisy" ]

// // Here are some more examples.
// const dogs = [ "Schnauzer", "Labrador Retriever", "Bulldog", "Poodle", "Collie" ]
// const studentAges = [ 24, 54, 32, 27, 29, 40, 35 ]
// const professions = [ "Mechanic", "Plumber", "Musician", "Engineer" ]
// const expenses = [ 71.54, 401.03, 89.59, 145.62 ]
// const months = [ "April", "July", "October", "December" ]

// // Here's a simple definition of an array. Think of it as an empty basket. Nothing is in it yet.
// const appleBasket = []
// // This is different than previous exercises where you assigned very concrete values to variables, like these.
// const age = 37  // Clear, concrete numeric value
// const name = "Edward McKnight" // Clear, concrete string value
// // You can either declare a new array as empty, like above, or you can provide it with initial values upon declaration.
// const myFavoriteColors = [ "red", "violet", "pink", "green", "white", "orange" ]

// // The placement of each number in that array is called its "index". The indexing of an array starts at zero, not one. That is, the item at index 0 of the above array is the string value "red".
// // You can, if you need to, look at the item at a specific index by using the following syntax.
// arrayVariable[index number]

// // So if you want to console.log() the color "white", you would write the following code
// const whiteColor = myFavoriteColors[4]
// console.log(whiteColor)

// // If you want to console.log() the color "violet", you would write the following code.
// const violetColor = myFavoriteColors[1]
// console.log(violetColor)

// ------------------------------------------------------//