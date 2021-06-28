const calculator = require('../code/calculator');

test('CALCULATOR TEST 1', () => {
  expect(calculator.add(12, 4)).toBe(16);
});

test('CALCULATOR TEST 2', () => {
  expect(calculator.sub(2, 22)).toBe(-20);
});

test('CALCULATOR TEST 3', () => {
  expect(calculator.div(3, 4)).toBe(0.75);
});

test('CALCULATOR TEST 4', () => {
  expect(calculator.mul(15, 12)).toBe(180);
});
