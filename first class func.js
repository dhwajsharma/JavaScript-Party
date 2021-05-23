a();
b(); // undefined

// Function statement aka Function Declaration
function a() {
    console.log("a called");
}

// Function Expression
var b = function () {
    console.log("b called");
}

// Anonymous Function
function () { } // syntax error

// Named Function Expression
var c = function xyz() {
    console.log("c is called");
}
c();
xyz(); // xyz is not defined

// Parameters
function x(param1, param2) {

}

// Arguments
c(arg1, arg2);

// First Class Functions - Ability to be used like values aka First Class Citizens
var z = function (param1) {
    return function abc() { }
}
console.log(z());

