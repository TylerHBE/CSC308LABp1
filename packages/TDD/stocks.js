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

    purchaseStock(ticker, quantity) {
        if (this.stocks[ticker]) {
            this.stocks[ticker] += quantity;
        } else {
            this.stocks[ticker] = quantity;
        }
    }

    sellStock(ticker, quantity) {
        if (this.stocks[ticker]) {
            this.stocks[ticker] -= quantity;
            if (this.stocks[ticker] <= 0) {
                delete this.stocks[ticker];
            }
            
        }
    }

    getNumberOfTickers() {
        return Object.keys(this.stocks).length;
    }
}

exports.Portfolio = Portfolio;