function University(name, location, size) {
    this.name     = name;
    this.location = location;
    this.size     = size;
  }
  
  const theUniversity = new University('caritas', 'enugu', 20000);

  theUniversity;

  // Array methods

  const fig = [2, 5, 10, 30, 20];

  // Length of array
  console.log( fig.length)

  // iterate
  for (let i = 0; i < fig.length; i++) {
    console.log(fig[i]);
  }
 
  // Mutator methods. Methods that alter the array

  fig.push(80);
  fig;

  // Acceessor methods. Methods that do not alter the array

  const b = fig.slice(1);
  b;

  // Iteration methods, iterate over the array

  const newFig = fig.map( function(val){ // calls a function on each element of the array.
      return val + 10;
  })

  newFig;