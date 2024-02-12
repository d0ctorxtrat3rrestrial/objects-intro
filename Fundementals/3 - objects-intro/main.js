const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50,
    material: "Cedar"
}

wardrobe.material = "Cedar"

console.log(wardrobe)

// ------------------------------------------------------//

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(`The Empire State Building is ${empireStateBuilding.squareFeet} square feet, ${empireStateBuilding.height} feet tall, ${empireStateBuilding.eastWestLength} feet by ${empireStateBuilding.northSouthLength} feet, and has approx. ${empireStateBuilding.stories} stories.`)

const addressKey = 'address';
const constructionDateKey = 'constructionDate';
const costKey = 'cost';
const ownerKey = 'owner';
const architectKey = 'architect';

console.log(empireStateBuilding[addressKey]);
console.log(empireStateBuilding[constructionDateKey]);
console.log(empireStateBuilding[costKey]);
console.log(empireStateBuilding[ownerKey]);
console.log(empireStateBuilding[architectKey]);

// ------------------------------------------------------//

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

console.log(nashvilleSoftwareSchool.instructors.partTime);

console.log(nashvilleSoftwareSchool.instructors.fullTime);

console.log("Andy");
console.log("Zoe");

// ------------------------------------------------------//

// // You can think of object as containers for data. It can have multiple kinds of data - strings, integers, booleans, functions, arrays, etc. One of the powerful features of an object - that you can't do with an array - is to label the data inside the container.

// // For example, the number 1 has no meaning in an application by itself. You have no idea what that integer represents until assign it a name. On objects, those are called keys.

// //
    // // Basic object representing my dog Angus.
    // // - The object itself is labeled with the variable of `dog`
    // // - The integer of 1 is labeled with the key of `age`
// //
// const angus = {
//     age: 1
// }

// // Another object representing my child Tessa
// const tessa = {
//     age: 1
// }

// // This is an object. It represents a single food.
// const food = {
//     type: "Hamburger",
//     size: "Small",
//     temperature: "Medium rare"
// }

// // This is not an object. It doesn't represent a singular thing. It also has no curly braces, or key/values pairs. When using an array to store these strings, they have now lost their context.
// const food = ["Hamburger", "Small", "Medium rare"]

// // This is an object. It represents a desk and itemizes the properties of it. 
// const desk = {
//     height: 42,
//     width: 63,
//     depth: 30
// }

// // Arrays are collections of similiar things. Objects are ways to define details of a single thing. Both an array and an object can be assigned to a variable.

// // Here you define two separate objects. One represents a cat, and the other represents a dog. Each has their own properties (key/value pairs) separated by commas.
// const whiskers = {
//     species: "Cat",
//     name: "Whiskers",
//     age: 4,
//     color: "Black"
// }

// const dozer = {
//     species: "Dog",
//     name: "Dozer",
//     age: 7,
//     color: "Brown"
// }

// // Developers never describe two things with a single object.
// // Don't do this
// const theAnimals = {
//     catName: "Jingles",
//     catAge: 4,
//     catColor: "Black",
//     dogName: "Denver",
//     dogAge: 7,
//     dogColor: "Brown"
// }

// // If you want to store both animals inside of a single data structure, this is what arrays are used for. In this case, if you want to store both of those animals in a single thing, you would put them both in an array.
// // This array is a collection of animals
// const animals = [cat, dog]

// // Dot Notation:
// // To obtain the value inside an object, and you know the name of the key, you can use dot notation. Here's the pattern.
// variableContainingTheObject.keyName
// // Given the following object...
// const lassie = {
//     age: 7,
//     breed: "Collie",
//     color: "White and Brown"
// }
// // To output the string "Collie" to the terminal, you would use the following code.
// console.log(`Lassie's breed is ${lassie.breed}`)
// // To output the integer 7 to the terminal, you would use the following code.
// console.log(`Lassie's age is ${lassie.age}`)

// // Square bracket notation is most often used when the key name is stored in a variable. The basic mechanics of it are similar to dot notation, you just use square brackets with the key name inside.
// // Above you saw how to access the breed key on the object below with dot notation.
// const lassie = {
//     age: 7,
//     breed: "Collie",
//     color: "White and Brown"
// }
// // Using square bracket notation, here's the syntax.
// // Square bracket notation for key access
// lassie["breed"]
// > "Collie"

// // Dot notation for key access
// lassie.breed
// > "Collie"
// // That's the basics, but you need to see how square is actually used in an application. Here's what it looks like when using a variable to look up a key on an object.
// // Breed is the key you want to get the value of in the object below
// const keyToLookup = "breed"

// // First, make JavaScript evaluate the variable and give us its value
// console.log(keyToLookup)
// > "breed"
// // Now that you know that keyToLookup evaluates to "breed", you can use the variable to lookup the value with square bracket notation.
// const lassie = {
//     age: 7,
//     breed: "Collie",
//     color: "White and Brown"
// }

// // Use the value of `keyToLookup` to get the value you want
// const lassiesBreed = lassie[keyToLookup]
// > "Collie"

// // So far, you've been largely accessing string and integer values in an object. However, values can be anything in the JavaScript language - including arrays. Consider this example.
// const kennel = {
//     name: "Nashville North Kennels",
//     address: "100 Demonbreun Road",
//     manager: "Harper Frankstone",
//     capacity: 50,
//     currentAnimals: ["Jet", "Snickers", "Blue", "Jacks", "Flap", "Barnum"]
// }
// // If you want to display all of the animals that are currently being boarded, you first have to access the array. You can use dot notation to get that value.
// const boardedAnimals = kennel.currentAnimals

// for (let i = 0; i < boardedAnimals.length: i++) {
//     console.log(boardedAnimals[i])
// }

// > "Jet"
// > "Snickers"
// > "Blue"
// > "Jacks"
// > "Flap"
// > "Barnum"
// // If you wanted to pull a single animal form the array, and display it, you can use the index value. To show the fourth animals in that array, you would use the following code.
// console.log(kennel.currentAnimals[3])

// > "Jacks"
// ------------------------------------------------------//