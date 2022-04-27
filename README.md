# dijkstras
Dijkstras's algorithm in JS.

## Example
```javascript
// Graph should be formatted like this.
const graph = {
    A: {B: 5, C: 4, D: 12},
    B: {A: 8, D: 7, C: 4},
    C: {D: 6 },
    D: {}
};

/*
  Arguments are:
  graph: graph
  start: node
  end: node
*/
const shortestPath = dijkstras(graph, 'A', 'D');

/*
    Returns [Array, Number]
    
    Array is an array of optimal steps from start to end
    Number is the total cost
*/ 
```
