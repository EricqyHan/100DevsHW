// Spread Operator
const parents = ["Lorrie", "Steve"];
const kids = ["Jake", "Annie", "Jess"];
const dogs = ["Oliver", "Brian"];
const fullFamily = [parents, kids];

console.log(fullFamily);

const fullFamily2 = [...parents, ...kids, ...dogs, "Eric"];
console.log(fullFamily2);

const originals = ["Mona Lisa", "American Gothic", "The School of Athens"];
const copies = originals;
console.log(copies.push("Nighthawks"));
console.log(copies);
const copies2 = [...originals];
console.log(copies2);
