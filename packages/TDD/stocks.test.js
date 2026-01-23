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

test('2.4 - Portfolio sells stocks correctly', () => {
    const portfolio = new myFunctions.Portfolio();
    portfolio.purchaseStock('AAPL', 10);
    portfolio.sellStock('AAPL', 4);
    expect(portfolio.getStocks()).toEqual({ 'AAPL': 6 });
});

test('2.5 - Portfolio gets number of tickers correctly', () => {
    const portfolio = new myFunctions.Portfolio();
    portfolio.purchaseStock('AAPL', 10);
    portfolio.purchaseStock('GOOGL', 5);
    expect(portfolio.getNumberOfTickers()).toBe(2);
});

test('2.5 - Portfolio gets number of tickers correctly with no purchases', () => {
    const portfolio = new myFunctions.Portfolio();
    expect(portfolio.getNumberOfTickers()).toBe(0);
});

test('2.6 - Portfolio sells stocks correctly to zero', () => {
    const portfolio = new myFunctions.Portfolio();
    portfolio.purchaseStock('AAPL', 10);
    portfolio.sellStock('AAPL', 10);
    expect(portfolio.getStocks()).toEqual({});
    expect(portfolio.isEmpty()).toBe(true);
});

test('2.6 - Portfolio sells stocks correctly', () => {
    const portfolio = new myFunctions.Portfolio();
    portfolio.purchaseStock('AAPL', 10);
    portfolio.purchaseStock('GOOGL', 5);
    portfolio.sellStock('AAPL', 10);
    expect(portfolio.getStocks()).toEqual({ 'GOOGL': 5 });
    expect(portfolio.isEmpty()).toBe(false);
});

test('2.6 - Portfolio gets number of tickers correctly after selling some stocks', () => {
    const portfolio = new myFunctions.Portfolio();
    portfolio.purchaseStock('AAPL', 10);
    portfolio.purchaseStock('GOOGL', 5);
    portfolio.sellStock('AAPL', 10);
    expect(portfolio.getNumberOfTickers()).toBe(1);
});