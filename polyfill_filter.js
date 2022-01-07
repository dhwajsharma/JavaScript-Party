// Current element, its index, and the context should be passed as an argument to the callback function.

Array.prototype.filter = function (callback) {
  // Store the new array
  const result = [];

  for (let i = 0; i < this.length; i++) {
    // call the callack with the current element, index and context
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};
