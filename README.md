# Keep Elements in View!

This simple repo keeps a floating element from wondering off your view. below is an example of its use.
Should you have an issue feel free to report it and I'll be more than happy to look into for you.

```javascript
  import correctPosition from 'keep-element-in-view';
  // or const correctPosition = require('keep-element-in-view');


  window.addEventListener('touchmove', () => {
    const thingInView = document.body.querySelector('.someAdProbably');
    correctPosition(thingInView);
  })
````
