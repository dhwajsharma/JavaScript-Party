// Current element, its index, and the array should be passed as an argument to the callback function.

let cities = [
  "jaipur",
  "Delhi",
  "Kanpur",
  "Indore"
]

Array.prototype.myMap = function(callback) {
  let finalArray = [];
  for (let i = 0; i < this.length; i++) {
    finalArray.push(callback(this[i], i, this));
  }
  return finalArray;
}

let result = cities.myMap(c => console.log(c)); 
