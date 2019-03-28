# @indlekofer/object_copy

## Usage

```js
import c from '@indlekofer/object_copy';
```

```js
var obj = c({test1: 1, test2: 2, test3: 3}, ["test2", "test3"]);
console.log(obj); //=> {test1: 1}
```

## Parameters

  **object**: *object* source object  
  **exclude**: *array* with excluded keys from source   
