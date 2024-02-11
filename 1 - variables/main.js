let firstName = "Document";
let lastName = "Jackson";
let age = 20;
let likesTravel = true
    if(likesTravel = true){
        travel = "I enjoy travelling."
    }
    else{
        travel = "I don't enjoy travelling."
    };
let temperature = "49°F";
let conditions = "Partly cloudy";
let sunriseTime = "7:24 AM";
let sunsetTime = "6:03 PM";


console.log("My name is " + firstName + " " + lastName + ", and I am " + age + " years old. " + travel + " The temperature today is " + temperature + ", and they sky is " + conditions + ". The sun rose at " + sunriseTime + " amd will set at " + sunsetTime + ".")

// ------------------------------------------------------//
// // We can check our work in JavaScript by running node.js. Paste the following line into your JS file.
// console.log("Hello, world!")
// // Next, go to your terminal and run the following command.
//node main.js

// // We declare the variable just like we did before
// let myName = "Dwayne Johnson";

// // Except this time we reassign it to hold a different value. Notice we don't have to use the let keyword for reassignments.
// myName = "The Rock";

// // This should log "The Rock" to the console
//console.log(myName);

//let catsName = "Edgar"
// const catColor = "orange"
// var catAge = 5
// // Unlike strings, numbers do not have quotes around them. JavaScript treats both integers (whole numbers) and floats (decimal numbers) the same.
// let age = 46;

// // You can perform basic math with JavaScript just like you would on a calculator.
// let totalCost;
// let totalWithTax;
// let costPerItem = 2.50;
// let numberOfItems = 4;
// let taxRate = 0.06;
// totalCost = costPerItem * numberOfItems;
// totalWithTax = totalCost + (taxRate * totalCost);
// console.log(totalWithTax);

// // Booleans are true/ false values. They do not have quotes around them.
// let likesDogs = true;
// let allergicToDogs = false;

// // Strings are anything that has a quotes around it. For now, the main thing we'll do with strings combine them with other values. This is called concatenation (when you combine a string with another string) or interpolation (when you combine a string with a variable or expression).
// let firstName = "Dwayne";
// let lastName = "Johnson";

// // There are a couple different ways to combine strings. These two examples produce the same result:

// // Option A: String Concatenation with the + symbol
// let fullName = firstName + " " + lastName;

// // Option B: String template literals (probably easier once you get used to them) When we say you need to string interpolate this is what we mean. More on this later
// fullName = `${firstName} ${lastName}`;

// // Anything becomes a string when you put quotes around it. This can cause some funky behavior if you're not careful.
// let x = "2";
// let y = "4";
// let total = x + y;
// // In this case, the value of total would be "24", not 6.

// ------------------------------------------------------//