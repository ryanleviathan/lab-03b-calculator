// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { add, subtract, divide, multiply } from '../mathUtils.js';

const test = QUnit.test;

test('add should take in 7 and 3 and return 10', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1 = 7;
    const argument2 = 3;
    const expected = 10;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtract should take 10 and 3 and return 7', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1 = 10;
    const argument2 = 3;
    const expected = 7;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('divide should take in 7 and 3 and return 10', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1 = 6;
    const argument2 = 3;
    const expected = 2;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('multiply should take 10 and 3 and return 7', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1 = 3;
    const argument2 = 3;
    const expected = 6;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});