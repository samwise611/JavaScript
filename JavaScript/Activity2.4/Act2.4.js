//variable types
var x = "This is a string"; //var with string
let y = 35; //let with numeric
const z = ["a", "b", "c", "d",]; //const with array

//named func
function namedFunction() {
    console.log("This is a named function.");
}

namedFunction();

//anon func
let anonFunction = function() {
    console.log("This is an anonymous function.");
}

anonFunction();

//conditional statements
//single if / else statement
var myAge = 35;

if (myAge >= 18) {
    console.log("You are an adult.");
}

else {
    console.log("You are under age.");
}

//if / else if / else if statement
var hightInCm = 160;

if (hightInCm >= 190) {
    console.log("You are tall!");
}

else if (hightInCm >= 150) {
    console.log("You are average hight!");
}

else {
    console.log("You are short!");
}

//array string
const breakfastMenu = [
    "Sausage",
    "Bacon",
    "Eggs",
    "Toast"
]

//array numeric
const time = [
    12,
    18,
    4
]

//array mixed
const data = [
    "yes",
    42,
    true
]

//console.log(breakfastMenu);
//console.log(time);
//console.log(data);

let text = ""

for(let i = 0; i < breakfastMenu.length; i++) {
    console.log(text + breakfastMenu[i]);
}