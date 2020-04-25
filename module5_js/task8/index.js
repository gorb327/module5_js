let animals = ['pig','dog','cat','parrot', 'chicken'];
let pets = [];

let animalsCarved = animals.splice(animals.length - 4, 3);
let nowPets = pets.push(animalsCarved);

console.log(animals);
console.log(pets);