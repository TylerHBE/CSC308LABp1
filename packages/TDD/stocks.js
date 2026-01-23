class Portfolio {
  constructor() {
    this.stocks = {};
  }

  getStocks() {
    return this.stocks;
  }

  isEmpty() {
    return Object.keys(this.stocks).length === 0;
  }
}

exports.Portfolio = Portfolio;