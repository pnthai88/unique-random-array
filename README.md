# unique-random-array
Get an item randomly from Array , the next time it will pick the other that won't be same the previous. After loop whole the round, the counter will reset to begin.

===================================================


```javascript
  const uniqueRandomArray = require('unique-random-array');
  
  const random = uniqueRandomArray( ['hello', 'hi', 'morning', 1, 2, 3, 4, 5] );
  
  console.log(random(), random(), random(), random());
```

===================================================

![Example img](/unique.PNG)
Format: ![Exp](url)
