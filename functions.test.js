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

const calculator = require ('./calculator');

describe('calculator', () => {
  const calc = new calculator();

  describe('calculator sum', () => {
    it('sum positive', () => {
      expect(calc.sum(1, 2)).toBe(3);
    });

    it('sum negative', () => {
      expect(calc.sum(-1, -2)).toBe(-3);
    });

    it('sum mixed', () => {
      expect(calc.sum(300, -533)).toBe(-233);
    });
  });

  describe('calculator substract', () => {
    it('substract positive', () => {
      expect(calc.substract(5, 3)).toBe(2);
    });

    it('substract negative', () => {
      expect(calc.substract(-20, -40)).toBe(20);
    });

    it('substract mixed', () => {
      expect(calc.substract(624, -305)).toBe(929);
    });
  });

  describe('calculator multiply', () => {
    it('multiply positive', () => {
      expect(calc.multiply(5, 3)).toBe(15);
    });

    it('multiply negative', () => {
      expect(calc.multiply(-9, -9)).toBe(81);
    });

    it('multiply mixed', () => {
      expect(calc.multiply(5, -6)).toBe(-30);
    });
  });

  describe('calculator divide', () => {
    it('divide positive', () => {
      expect(calc.divide(15, 3)).toBe(5);
    });

    it('divide negative', () => {
      expect(calc.divide(-81, -9)).toBe(9);
    });

    it('divide mixed', () => {
      expect(calc.divide(30, -6)).toBe(-5);
    });
  });
});