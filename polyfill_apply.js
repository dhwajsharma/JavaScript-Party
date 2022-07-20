let car1 = {
  color: 'red',
  company: 'ford',
};

function purchaseCar(currency, price) {
  console.log(`${this.color} - ${this.company} car for ${currency}${price}`);
}

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
