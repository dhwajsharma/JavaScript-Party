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
