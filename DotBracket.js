// To look at the differences between dot notation and bracket notation
// Use Quokka JS


// Dot Notation
// Syntax is Object.properyName
let obj = {
    cat: 'meow',
    dog: 'woof'
};

let sound = obj.cat;
sound;

/**
 * When working with dot notation, property identifies can only be alphanumeric (and _ and $).
 * Properties can’t start with a number.
 */


 // Bracket notation
// syntax objectName["propertyName"].
 let obj1 = {
    cat: 'meow',
    dog: 'woof'
 };

 let catSound = obj1['cat'];
 catSound;

 // In Arrays

 let arr = ['a', 'b', 'c'];

 let letter = arr[1];
 
 
