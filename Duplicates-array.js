const arr = ['one', 'two', 'one', 'one', 'two', 'three'];

const count = {};

arr.forEach(element => {
  count[element] = (count[element] || 0) + 1;
});

// 👇️ {one: 3, two: 2, three: 1}
console.log(count);
