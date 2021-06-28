const capitalize = require('../code/capitalize');

test('CAPITALIZE TEST 1', () => {
  expect(capitalize('hi')).toBe('Hi');
});

test('CAPITALIZE TEST 2', () => {
  expect(capitalize("what's happening?")).toBe("What's happening");
});

test('CAPITALIZE TEST 3', () => {
  expect(capitalize('well YOU got Nothing to worry about')).toBe(
    'Well YOU got Nothing to worry about'
  );
});

test('CAPITALIZE TEST 4', () => {
  expect(capitalize('Hello there')).toBe('Hello there');
});
