// Variable

//Data Type int, string, boolean, float

// Dynamically Typed
const friends = 5; // Constant: The varaible cannot be reassigned another value
let age = 25; // Let : The varibale can be reassigned another value
const firstname = 'Segun';

age = 70;

//Print Out to a Statment
console.log(
  'My name is ' +
    firstname +
    '. I am ' +
    age +
    '. I have' +
    friends +
    ' Friends'
);

// String
const lastname = 'Iyanda';
const address = "Thompson's Street";
const description =
  'I am a Teacher, IT professional. \nIt is my pleasure teaching this class';

console.log(description);

// Template String
const bio = `My name is ${firstname} ${lastname}. I am ${age}. ${description}. I have ${friends} Friends`;
console.log(bio);

// ASSIGNMENT 1 : Use Template String to construct your entire bio with declared variables.

// Operands: +,-,=,<,>,<=, >=, /, //, %, ==, ===
// Logic Operands: &&: AND, OR:||, ! : NOT

// Condtional Statement. IF-Else, Switch

//Person Character
age = 22;
const isSmoking = false;
const isWorking = true;

//For Loop, While Loop
//INDEX
for (let i = 1; i <= 5; i++) {
  // 1<X<5
  if (age < 18) {
    // If condition is true
    console.log('You are a minor');
  } else if (age >= 70) {
    // Greater than OR Equals to
    console.log('You are too old to drink');
  } else if (age >= 50 && isSmoking) {
    console.log('You cannot drink because you smokes');
  } else {
    // If condition is false
    console.log('You are good to drink');
  }
}

// VARIABLE
const city = 'Lagos'; // String
let streetNumber = 5; // Integer
var state = 'Lagos'; // String "", ''
var character = 'c'; // Character

//PRINT TO CONSOLE
console.log(city);

// CONDITIONAL STATEMENT
if (city == 'Lagos') {
  console.log('You live in Lagos');
} else if (city == 'Ibadan') {
  console.log('You live in Ibadan');
} else {
  console.log('You do not live in Lagos');
}

// ITTERATION : for, while
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// OBJECT
const Person = {
  firstname: 'Segun',
  lastname: 'Gideon',
  city: 'Lagos',
};

console.log(Person.firstname);
console.log(Person);

//Functions

function Calculator() {}

// Arrow Function
const Calculators = () => {};
