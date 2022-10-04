/* Tests for stringLength function */

const stringLength = require ('./stringlength');

describe('string length', () => {
  it('stringlength check', () => {
    expect(stringLength('example')).toBe(7);
  });
  
  it('string too long check', () => {
    expect(() => stringLength('exampleten+')).toThrow('Error: String Too Long');
  })
  
  it('empty string check', () => {
    expect(() => stringLength('')).toThrow('Error: Empty String');
  })
})


/* Tests for reverseString function */

const reverseString = require ('./reversestring');

it('reverse check', () => {
  expect(reverseString('example')).toBe('elpmaxe');
});

/* Tests for Calculator */
