// Q1

let obj = { name: 'Dhwaj' };

function hello(age, profession) {
  return this.name + ' ' + age + ' ' + profession;
}

console.log(hello.call(obj, 21, 'Software Engineer'));

function hello(age, profession) {
  return this.name + ' ' + age + ' ' + profession;
}

console.log(hello.apply(obj, [21, 'Software Engineer']));

function hello(age, profession) {
  return this.name + ' ' + age + ' ' + profession;
}

const bindFunc = hello.bind(obj);

console.log(bindFunc(21, 'Frontend Engineer'));
console.log(bindFunc(25, 'Backend Engineer'));

// Q2

const person = { name: 'dhwaj' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 20));
console.log(sayHi.bind(person, 24));

// Q3

const age = 21;
let person = {
  name: 'Dhwaj',
  age: 25,
  getAge: function () {
    console.log(this.age);
  },
};

let person2 = { age: 24 };
person.getAge.call(person2);

person.getAge.bind(person2)();

// Q4

let status = '😊';

setTimeout(() => {
  const status = '😂';

  const data = {
    status: '😘',
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus()); // 😘
  console.log(data.getStatus.call(this)); // 😊
}, 0);

// Q5

const animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Queen' },
];

function printAnimals(i) {
  this.print = function () {
    console.log('#' + i + ' ' + this.species + ': ' + this.name);
  };

  this.print();
}

for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}

Q6 - Append an array to another array

const array = ['a', 'b'];
const elements = [0, 1, 2];

array.push.apply(array, elements);

console.log(array);

Q7 - Find min/max number in an array

const numbers = [5, 6, 2, 9, 3];

console.log(Math.max.apply(null, numbers));
console.log(Math.min.apply(null, numbers));

// Q6

function f() {
  console.log(this);
}

let user = {
  g: f.bind(null),
};

user.g(); // window object

Q9 - Bind chaining

function f() {
  console.log(this.name);
}

f = f.bind({ name: 'John' }).bind({ name: 'Ann' });

f(); // John(bind chaining doesn't exist)

// Q7

const age = 20;

let person = {
  name: 'Dhwaj',
  age: 24,
  getAgeArrow: () => console.log(this.age),
  getAge: function () {
    console.log(this.age);
  },
};

let person2 = { age: 30 };

person.getAgeArrow.call(person2); // undefined
person.getAge.call(person2); // 30

// Q8 - Polyfill for call method

let car1 = {
  color: 'red',
  company: 'ford',
};

function purchaseCar(currency, price) {
  console.log(`${this.color} - ${this.company} car for ${currency}${price}`);
}

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + "It's not callable");
  }

  context.fn = this;
  context.fn(...args);
};

purchaseCar.myCall(car1, '💲', 100000000);

// Q9 - Polyfill for apply

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== 'function') {
    throw new Error(this + "It's not callable");
  }

  if (!Array.isArray(args)) {
    throw new TypeError('CreateListFromArrayLike called on non-object.');
  }

  context.fn = this;
  context.fn(...args);
};

purchaseCar.myApply(car1, ['💲', 100000000]);

// Q10 - Polyfill for bind

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + "cannot be bound as it's not callable");
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const newFunc = purchaseCar.myBind(car1, '💲', 50000000);
console.log(newFunc());
