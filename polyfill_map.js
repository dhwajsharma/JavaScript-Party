// Current element, its index, and the context should be passed as an argument to the callback function.

Array.prototype.map = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    // cross check if the element is part of the current
    if (this.indexOf(this[i]) > -1) {
      result[i] = callback(this[i], i, this);
    }
  }

  return result;
};
