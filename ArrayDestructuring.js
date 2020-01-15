const rgb = [255, 200, 0];

// Array destructuring
const [red, green, blue] = rgb;

console.log(`R: ${red}, G: ${green}, B: ${blue}`);

// Default values

const rgb2 = [200];

// Assign default values of 255 to red and blue
const [red2= 255, green2, blue2 = 255] = rgb2;

console.log(`R: ${red2}, G: ${green2}, B: ${blue2}`);


let red3 = 100;
let green3 = 200;
let blue3 = 50;

const rgb3 = [200, 255, 100];

// Destructuring assignment to red and green
[red3, green3] = rgb3;

console.log(`R: ${red3}, G: ${green3}, B: ${blue3}`); 


// Skipping items

const rgb4 = [200, 255, 100];

// Skip the first two items
// Assign the only third item to the blue variable
const [,, blue4] = rgb4;

console.log(`Blue: ${blue4}`);

//Swapping Variables

let width = 300;
let height = 400;
const landscape = true;

console.log(`${width} x ${height}`);

if (landscape) {
    // Swap the variables
    [width, height] = [height, width];
  
    console.log(`${width} x ${height}`); // 400 x 300
}

//Nested Array Destructuring

const coloring = ['#FF00FF', [255, 0, 255], 'rgb5(255, 0, 255)'];

// Use nested destructuring to assign red, green and blue
const [hex, [red5, green5, blue5]] = coloring;

console.log(hex, red5, green5, blue5); 
