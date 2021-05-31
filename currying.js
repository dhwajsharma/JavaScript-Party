// by closures
let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

// by closures
let multiplyByTwo = multiply(2);
multiplyByTwo(5);

// by Bind method
let multiply = function (x, y) {
  console.log(x * y);
};

// by Bind method
let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);
