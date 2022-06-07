test("One euro should be 1.206 dollars", () => {
    const {eurostoDollars} = require('./app.js')

    const dollars = eurostoDollars(3.5)
    const expected = 3.5 * 1.2;
    expect(eurostoDollars(3.5)).toBe(4.2);
});
const { dollarsToYen } = require('./app.js')

test("One dollar should be 383.7 yen", () => {

    const yen = dollarsToYen()
    const expected = 3 * 127.9;

    expect(dollarsToYen(3)).toBe(319);
});

test("One pound should be 8 yen", () => {

    const { yenToPound } = require('./app.js')
    const pound = yenToPound()
    const expected = 10 * 0.8;
    expect(yenToPound(10)).toBe(0.06254886630179828);
});
