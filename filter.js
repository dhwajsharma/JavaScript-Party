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
];

const output = users.filter((x) => x.age < 80).map((x) => x.firstName);

console.log(output);
