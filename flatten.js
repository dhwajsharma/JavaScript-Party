// flatten the array

let arr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [34, 12, 43, 89, 12],
];

function customFlat(arr, depth = 1) {
  let result = [];
  arr.forEach((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      result.push(...customFlat(ar, depth - 1));
    } else {
      return result.push(ar);
    }
  });
  return result;
}

console.log(customFlat(arr, 2));
