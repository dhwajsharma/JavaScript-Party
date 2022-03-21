// arr.reduce((acc, curr, i, arr)=> {}, initialValue)

Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? callback(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
}

const nums = [1, 2, 3, 4];

const output = nums.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0)

console.log(output)
