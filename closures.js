// Function along with its lexical scope bundled together forms a closure.

// eg 1:

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  a = 100;
  return y;
}

var z = x();
z(); // 100(because a is the reference)

// eg 2:

function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z(); // 7, 900


// closures are used in:
// module design pattern
// currying
// functions like once
// memoize 
// maintaining state in async world
// setTimeouts
// iterators
