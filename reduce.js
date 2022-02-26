const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  },
  {
    firstName: "Jake",
    lastName: "Paul",
    age: 97,
  },
  {
    firstName: "Griffin",
    lastName: "Lord",
    age: 69,
  },
  {
    firstName: "Jesus",
    lastName: "Christ",
    age: 89,
  },
  {
    firstName: "Jesus",
    lastName: "Christ",
    age: 89,
  },
];

const output = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(output); // {30: 1, 69: 1, 89: 2, 97: 1}
