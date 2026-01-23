const myFunctions = require('./stocks.js');

test('2.1 - Portfolio instantiates empty', () => {
  const portfolio = new myFunctions.Portfolio();
  expect(portfolio.getStocks()).toEqual({});
});

test('2.2 - Portfolio answers isEmpty correctly', () => {
  const portfolio = new myFunctions.Portfolio();
  expect(portfolio.isEmpty()).toBe(true);
});

test('2.3 - Portfolio purchases stocks correctly', () => {
  const portfolio = new myFunctions.Portfolio();
  portfolio.purchaseStock('AAPL', 10);
  expect(portfolio.getStocks()).toEqual({ 'AAPL': 10 });
});

test('2.3 - Portfolio purchases stocks correctly, answers isEmpty correctly', () => {
  const portfolio = new myFunctions.Portfolio();
  portfolio.purchaseStock('AAPL', 10);
  expect(portfolio.isEmpty()).toBe(false);
});