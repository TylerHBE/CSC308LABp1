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

test('2.7 - Portfolio answers how many stocks owned', () => {
    const portfolio = new myFunctions.Portfolio();
    portfolio.purchaseStock('AAPL', 10);
    portfolio.purchaseStock('GOOGL', 5);
    expect(portfolio.getNumberOfStock('AAPL')).toBe(10);
    expect(portfolio.getNumberOfStock('GOOGL')).toBe(5);
});

test('2.7 - Portfolio answers how many stocks owned for non-existent ticker', () => {
    const portfolio = new myFunctions.Portfolio();
    expect(portfolio.getNumberOfStock('MSFT')).toBe(0);
});

test('2.8 - Error when selling more stocks than owned', () => {
    const portfolio = new myFunctions.Portfolio();
    portfolio.purchaseStock('AAPL', 10);
    expect(() => portfolio.sellStock('AAPL', 15)).toThrow('Not possible to sell this number of shares.');
});

test('2.8 - Error when selling not owned stocks', () => {
    const portfolio = new myFunctions.Portfolio();
    expect(() => portfolio.sellStock('AAPL', 15)).toThrow('Not possible to sell this number of shares.');
});

/* Overall, I felt that following the TDD approach was very helpful in understanding the 
requirements and implementing the code correctly. The tests guided me through each step of 
development, ensuring that each function worked as expected before moving on to the next. 
This made debugging easier and helped me write more robust code. Additional testing helped 
me figure out smaller bugs, like one bug where I was testing for if the stock quantity was 
enough to sell but I forgot I had already accounted for if the stock existed in the first 
place, meaning no error was thrown even if the stock attempting to be sold didn't exist. So,
overall, I thought the approach was quite helpful. */