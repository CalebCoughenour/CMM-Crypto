export default class CryptoSearch {
  static getCoins(input) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.nomics.com/v1/currencies/ticker?key=${process.env.CRYPTO_API_KEY}&ids=${input}&convert=USD&per-page=5&page=1`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else  {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}