const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    utils.trimProperties(input)
    expect(input).toEqual({ foo: '  foo ', bar: 'bar ', baz: ' baz' })
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toBe(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{ integer: 1 }, { integer: 3 }, { integer: 2 }]
    const actual = utils.findLargestInteger(input)
    expect(actual).toBe(3)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const expected = 3
    const actual = counter.countDown()
    expect(actual).toBe(expected)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    const expected = 2;
    let actual = counter.countDown();
    actual = counter.countDown();
    expect(actual).toBe(expected);
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    const expected = 0;
    let actual = counter.countDown();
    actual = counter.countDown();
    actual = counter.countDown();
    actual = counter.countDown();
    actual = counter.countDown();
    expect(actual).toBe(expected);
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const expected = 'summer'
    let actual = seasons.next()
    expect(actual).toBe(expected)
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    const expected = 'fall'
    let actual = seasons.next()
    actual = seasons.next()
    expect(actual).toBe(expected)
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    const expected = 'winter'
    let actual = seasons.next()
    actual = seasons.next()
    actual = seasons.next()
    expect(actual).toBe(expected)
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    const expected = 'spring'
    let actual = seasons.next()
    actual = seasons.next()
    actual = seasons.next()
    actual = seasons.next()
    expect(actual).toBe(expected)
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    const expected = 'summer'
    let actual = seasons.next()
    actual = seasons.next()
    actual = seasons.next()
    actual = seasons.next()
    actual = seasons.next()
    expect(actual).toBe(expected)
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    const expected = 'spring'
    let actual
    for (let i = 1; i <= 40; i++){
      actual = seasons.next()
    }
    expect(actual).toBe(expected)
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    const expected = 30
    const actual = focus.drive(30)
    expect(actual).toBe(expected)
  })
  test('[16] driving the car uses gas', () => {
    const expected = 19
    focus.drive(30)
    const actual = focus.gasRemaining
    expect(actual).toBe(expected)
  })
  test('[17] refueling allows to keep driving', () => {
    let expected = 600
    focus.drive(630)
    let actual = focus.odometer
    expect(actual).toBe(expected)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    const expected = 600
    const actual = focus.refuel(1)
    expect(actual).toBe(expected)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  // test('[19] resolves true if passed an even number', () => {})
  // test('[20] resolves false if passed an odd number', () => {})
})
