
var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]

var i = 0;

while(i < cohortOneStudents.length){
  console.log(cohortOneStudents[i]);
  i++;
}

// ------------------------------------------------------//

var documentInterests = ["character design.", "playing video games.", "extraterrestrials.", "cryptids.", "game design and development."]
var i = 0;

while(i < documentInterests.length){
    console.log("One of my interests is " + documentInterests[i]);
    i++;
  }

// ------------------------------------------------------//

var documentInterests = ["character design.", "playing video games.", "extraterrestrials.", "cryptids.", "game design and history."]
var i = 0;

for(let i = 0; i < documentInterests.length; i++){
    if (documentInterests[i] == "game design and history.") {
        console.log("My absolute favorite interest is game design and history.");
    } else {
        console.log("One of my interests is " + documentInterests[i])
    }
}

// ------------------------------------------------------//

// // Here's a bare-bones while loop. This code will log "Hello, world" to the console 20 times and then stop.
// let i = 1;

// while(i < 20){
//   console.log("Hello, world");
//   i++;
// }

// // Let's look at a more practical example.
// var moviesArray = ["Casablanca", "Star Wars", "Singing in the Rain", "The Wizard of Oz", "Die Hard"];

// var i = 0;

// while(i < moviesArray.length){
//   console.log(moviesArray[i]);
//   i++;
// }

// // While loops are great for learning how loops work, but we won't actually use them very much. The for loop is much more common. It works in a similiar way, but the syntax is different.
// for(var i = 0; i < moviesArray.length; i++){
//     console.log(moviesArray[i]);
//   }

// ------------------------------------------------------//