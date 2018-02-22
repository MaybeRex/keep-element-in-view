# Keep Elements in View!

This simple repo keeps a floating element from wondering off your view. below is an example of its use.
Should you have an issue feel free to report it and I'll be more than happy to look into for you.

## Usage

```javascript
  import correctPosition from 'keep-element-in-view';
  // or const correctPosition = require('keep-element-in-view');

  // pass an HTMLElement and position will be auto corrected
  correctPosition(HTMLElement, HTMLElement.parent || null) // null will set the parent to document.body

  // pass in a coordinates object and have corrected coordinates returned
  correctPosition({
    left: String
    top: String
    width: String
    height: String
  }, HTMLElement.parent || null)
```

returned coordinates

```javascript
  {
    left: String
    top: String
    width: String
    height: String
  }
```

### Use by passing in an element
```javascript
  import correctPosition from 'keep-element-in-view';
  // or const correctPosition = require('keep-element-in-view');


  window.addEventListener('touchmove', () => {
    const thingInView = document.body.querySelector('.someAdProbably');
    correctPosition(thingInView);
  })
````
