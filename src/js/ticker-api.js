export default class CryptoSomething {
  static getPrices() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}&ids=BTC,ETH&interval=1d&convert=USD&per-page=5&page=1`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else  {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}