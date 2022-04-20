export default class UserSearch {
  static getUserPrice(coin, interval) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}&ids=${coin}&interval=${interval}&convert=USD&per-page=1&page=1`;
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