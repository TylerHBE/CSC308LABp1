const myFunctions = require('./stocks.js');

test('2.1 - Portfolio instantiates empty', () => {
  const portfolio = new myFunctions.Portfolio();
  expect(portfolio.getStocks()).toEqual({});
});

test('2.2 - Portfolio answers isEmpty correctly', () => {
  const portfolio = new myFunctions.Portfolio();
  expect(portfolio.isEmpty()).toBe(true);
});