if (1 + 1 > 5) {
    console.log("True fact!");
} else {
    console.log("LIES!");
}

if (4 * 5 <= 20) {
    console.log("True fact!");
} else {
    console.log("LIES!");
}

if (6 - 2 >= 0) {
    console.log("True fact!");
} else {
    console.log("LIES!");
}

// ------------------------------------------------------//

// // Conditionals decide whether or not pieces of code should run.
// if(2+2 === 4){
//     console.log("Math works!");
//   } else {
//     console.log("Math is broken.")
//   }
  
//   // Expected output: "Math works!"

// // You can add as many conditions as you want with else if. In the following example, JavaScript will try each condition in order. As soon as one of them evaluates to true, it will run that code block and skip the rest.
// var time ="afternoon";

// if (time === "morning"){
//   console.log("Good morning!");
// } else if (time === "afternoon"){
//   console.log("Good afternoon!");
// } else if (time === "evening"){
//   console.log("Good evening!");
// } else {
//   console.log("Hello!");
// }
// // Expected output: "Good afternoon!"

// // Comparison operators always evaluate to true or false.
// // Triple equals will check to see if the type and the value are equal
// "Hello" === "Hello"; //true
// 24 === "24"; // false

// // Double equals will compare values as if they're the same type, even if they're not. This can get messy, so you should default to triple equals 
// 24 == "24" // true

// 3 > 23 // false, 3 is not greater than 23
// 22 < 100 // true, 22 is less than 100
// 24 <= 25 // true, 24 is less than or equal to 25
// 62 >= 4 // true, 62 is greater than or equal to 4

// // We can also check to see if things are NOT equal.
// var name = "Jordan";
// if(name !== "Dwayne"){
//   console.log("Too bad for you!");
// }
// // Expected output: "Too bad for you!"

// // We can also check to see if more than one condition is true.
// var fullMoon = true;
// var isWolf = false;

// // This block of code will only run if the moon is full AND you're a wolf. Right now, this code won't run because the value of isWolf is false.

// if(fullMoon && isWolf){
//   console.log("AWOOOOOOOOOOO");
// }

// // What if we want non-wolves to be able to howl at the full moon too? This block will run if you're a wolf OR if the moon is full. However, if both conditions are false (you're not a wolf and the moon is not full), the code will not run.

// if(fullMoon || isWolf){
//   console.log("AWOOOOOOOOOOO");
// }

// ------------------------------------------------------//