// Arrary is a list of element
// ["segun", 0, 9]

const array = ['Segun', 25, 'Lagos'];

console.log('My Name is: ', array[2]);

const obj = {
  id: 1,
  firstname: 'Segun',
  age: 27,
  occupation: 'IT',
};

console.log('Name: ', obj.firstname);

// Array of Object
const classList = [
  {
    id: 1,
    firstname: 'Segun',
    age: 27,
    occupation: 'IT',
  },
  {
    id: 2,
    firstname: 'Kelvin',
    age: 18,
    occupation: 'Doctor',
  },
];

const kelvinProperty = classList[1].age;
console.log(kelvinProperty);

// Array Manipulation
const LouisProperty = classList.push({
  id: 3,
  firstname: 'Louis',
  age: 46,
  occupation: 'Teacher',
});

console.log(classList);

const lastPerson = classList.pop();
console.log(lastPerson);
console.log(classList);

const lenghtOfClass = classList.length;
console.log(lenghtOfClass);
