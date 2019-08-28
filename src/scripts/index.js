import '../styles/index.scss';

// console.log('webpack starterkit');



// function sendCars(day, ...allCarIds) {
//     allCarIds.forEach(id => console.log(id));
// }

// sendCars('Monday', 100, 200, 300);

let carIds = [1, 2, 3];
let car1, car2, theRest;

[car1, car2, ...theRest] = carIds;

// let remainingCars;

// [, ...remainingCars] = carIds;

console.log(car1, car2, theRest);
// console.log(remainingCars);

/////////////////////////////////////////////////////
let car = { id: 5000, style: 'convertible'};
let {id, style} = car;

console.log(id, style);
// console.log(remainingCars);


let animal = {fur: 'long', weight: '8lbs'};
let {fur, weight} = animal;

console.log(animal.fur, animal.weight);

an