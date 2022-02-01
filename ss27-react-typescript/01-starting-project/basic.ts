// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12.1

let userName: string;

userName = 'Max'

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[]

hobbies = ['Sports', 'Cooking']

type Person = {
  name: string;
  age: number;

}

let person: Person;

person = {
  name: 'Max',
  age: 32
}

let people: Person[];

// Type inference

let course: string | number = 'React - The Complete Guide'

course = 21321421421

// Functions & types

function add(a: number, b: number) {
  return a + b
}

function print(value: any) {
  console.log(value)
}

function insertAtBegining<T>(array: T[], value: T) {
  const newArray = [value, ...array]
  return newArray
}

const demoArray = [1, 2, 3]

const updatedArray = insertAtBegining(demoArray, -1) // [-1, 1, 2, 3]

