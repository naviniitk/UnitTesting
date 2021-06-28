const reverseString = require('../code/reverseString');

test('REVERSE STRING TEST 1', () => {
  expect(reverseString('Hello')).toBe('olleH');
});

test('REVERSE STRING TEST 2', () => {
  expect(reverseString('What to Do')).toBe('oD ot tahW');
});

test('REVERSE STRING TEST 3', () => {
  expect(reverseString('You are welcome here')).toBe('ereh emoclew era uoY');
});

test('REVERSE STRING TEST 4', () => {
  expect(reverseString('saippuakivikauppias')).toBe('saippuakivikauppias');
});
