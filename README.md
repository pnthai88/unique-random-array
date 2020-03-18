# unique-random-array
Get an item from Array randomly, the next time won't be same the previous. 

const uniqueRandomArray = require('unique-random-array');
 
const random = uniqueRandomArray( ['hello', 'hi', 'morning', 1, 2, 3, 4, 5] );
 
console.log(random(), random(), random(), random());
