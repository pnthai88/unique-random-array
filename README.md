# unique-random-array

![Example img](/unique.PNG)

Get an item randomly from Array , the next time it will pick the other that won't be same the previous. After loop whole the round, the counter will reset to begin.

===================================================


```javascript
  const uniqueRandomArray = require('unique-random-array');
  
  const random = uniqueRandomArray( ['hello', 'hi', 'morning', 1, 2, 3, 4, 5] );
  
  console.log(random(), random(), random(), random());
```

===================================================

If you're looking for a mesh connection to API service or else ...
```javascript
  const uniqueRandomArray = require('unique-random-array');
  
  function get_server() {
    return random = uniqueRandomArray( [
            'https://localhost:1200/api', 
            'https://localhost:1300/api', 
            'https://localhost:1400/api',
            'https://localhost:1500/api',
            'https://localhost:1600/api'
         ] );
  }
  
  const choose_server = get_server();
  console.log(choose_server);
```
