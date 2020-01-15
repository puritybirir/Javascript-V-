// Destructuring simply implies breaking down a complex structure into simpler parts. 
// It can be used for variable declaration or variable assignments
const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63,
        science: 85
    }
}

// Example without destructuring below

// function displaySummary (student) {
//     console.log('Hello, ' + student.name);
//     console.log('Your Maths score is ' + (student.scores.maths || 0));
//     console.log('Your English score is ' + (student.scores.english || 0));
//     console.log('Your Science score is ' + (student.scores.science || 0));
// }

// displaySummary(student);

// Caveats to this method include: More typing, error prone, deep nesting
// A better way would have to be 

function displaySummary({name, scores: {maths = 0, english = 0, science = 0}}){
    console.log('Hello, ' + name);
    console.log('Your Maths score is ' + maths);
    console.log('Your English score is ' + english);
    console.log('Your Science score is ' + science);
}

displaySummary(student);

// New example


const newStudent = {
    firstname: 'Glad',
    lastname: 'Chinda',
    country: 'Nigeria'
};

// Object Destructuring
const { firstname, lastname, country } = newStudent;

console.log(firstname, lastname, country);


// Initialize local variables
let countrys = 'Canada';
let first = 'John';
let last = 'Doe';

const AnotherStudent = {
    first: 'Glad',
    last: 'Chinda',
    countrys: 'Nigeria'
};

({ first, last} = AnotherStudent);

console.log(first, last, countrys);


// Default values

const human = {
    jina: 'John Doe',
    nchi: 'Canada'
};

const { jina, nchi, umri = 25} = human;

console.log(`I am ${jina} from ${nchi} and I am ${umri} years old.`);

// Different variable names

const thisPerson = {
    names: 'John Doe',
    countryOfOrigin: 'Canada'
};

const {names: fullname, countryOfOrigin:place, age: years = 25} = thisPerson;
console.log(`I am ${fullname} from ${place} and I am ${years} years old.`);

/**
 When using nested object destructuring, be careful to avoid using an empty nested object literal.
Though it is valid syntax, it actually does no assignment. For example, the following destructuring
does absolutely no assignment.
*/

const { scores: {} } = student;