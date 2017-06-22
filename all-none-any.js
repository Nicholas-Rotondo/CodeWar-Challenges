Array.prototype.all = function (p) {
  return this.filter(p).length === this.length;
};

Array.prototype.none = function (p) {
  return this.filter(p).length === 0;
};

Array.prototype.any = function (p) {
  return this.filter(p).length > 0;
};


// solution ^
// tests

function isGreaterThanZero (num) {
  return num > 0;
}

function isLessThanZero (num) {
  return num < 0;
}

Test.expect([1, 2, 3].all(isGreaterThanZero), 'All are greater than zero');
Test.expect(![-1, 0, 2].all(isGreaterThanZero), 'One is less than zero');

Test.expect(![-1, 2, 3].none(isLessThanZero), 'One is less than zero');
Test.expect([-1, -2, -3].none(isGreaterThanZero), 'None are greater than zero');

Test.expect([-1, 2, 3].any(isGreaterThanZero), 'Two are greater than zero');
Test.expect(![-1, -2, -3].any(isGreaterThanZero), 'None are greater than zero');
