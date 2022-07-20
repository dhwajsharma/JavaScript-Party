let car1 = {
  color: 'red',
  company: 'ford',
};

function purchaseCar(currency, price) {
  console.log(`${this.color} - ${this.company} car for ${currency}${price}`);
}

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
