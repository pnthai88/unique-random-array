  // node.exe test.js
  // test command
  
  const uniqueRandomArray = require('unique-random-array');
  const random = uniqueRandomArray( ['hello', 'hi', 'morning', 1, 2, 3, 4, 5] );
  console.log(random(), random(), random(), random());
