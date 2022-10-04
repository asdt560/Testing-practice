const stringLength = require ('./stringlength');

it('stringlength check', () => {
  expect(stringLength('example')).toBe(7);
});

it('string too long check', () => {
  expect(() => stringLength('exampleten+')).toThrow('Error: String Too Long');
})

it('empty string check', () => {
  expect(() => stringLength('')).toThrow('Error: Empty String');
})