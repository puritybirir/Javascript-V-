const [first, second] = [true, false]
first;
second;

//Destructuring challenge

const {name, weapon, room} = {
    name: "Rusty",
    room: "kitchen",
    weapon: "candlestick"
}

console.log(`The ${weapon} is the weapon and the ${room} is the location`)


// Destructuring examples

var [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]]


