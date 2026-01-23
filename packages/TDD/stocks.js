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
        if (quantity > this.getNumberOfStock(ticker)) {
                throw new Error('Not possible to sell this number of shares.');
        }
        else {
            this.stocks[ticker] -= quantity;
            if (this.stocks[ticker] <= 0) {
                delete this.stocks[ticker];
            }
        }
    }

    getNumberOfTickers() {
        return Object.keys(this.stocks).length;
    }

    getNumberOfStock(ticker) {
        return this.stocks[ticker] || 0;
    }
}

exports.Portfolio = Portfolio;