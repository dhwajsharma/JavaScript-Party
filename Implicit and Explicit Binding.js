// Implicit and Explicit Binding
var obj = {
  name: "Dhwaj",
  display: function () {
    console.log(this.name);
  },
};

var obj1 = {
  name: "Astitva",
};

obj.display.call(obj1); // output: Astitva
