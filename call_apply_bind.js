// call, apply and bind

var person = {
  name: "Dhwaj Sharma",
  hello: function (thing) {
    console.log(this.name + " says hello " + thing);
  },
};

var alterEgo = {
  name: "Dhwaj",
};

// call
person.hello.call(alterEgo, "world");

// apply
person.hello.apply(alterEgo, ["world"]);

// bind
const newHello = person.hello.bind(alterEgo);
newHello("world");
