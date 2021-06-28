let name = 'AndoAWDioadjo';
console.log(name);

let person = {
    name: 'An',
    age: 20
};

person.name = 'Dog';

let selection = 'name';
person[selection] = 'DOGSH';
console.log(person.name);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);

function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('An', 'Dinh');

function square(number) {
    return number * number;
}

let squared = square(8);
console.log(squared);
