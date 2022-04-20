import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CryptoSomething from './js/ticker-api.js';
import UserSearch from './js/user-input-api.js';

$(document).ready(function() {
 let promise = CryptoSomething.getPrices();
  promise.then(function(response) {
    const body = JSON.parse(response);
    let src = body[0].logo_url;
    let src1 = body[1].logo_url;
    $('#btc-logo').html("<img src='" + src + "'>");
    $('#eth-logo').html("<img src='" + src1 + "'>");
    $('#btc-display').text(`BTC price: $${body[0].price}`);
    $('#eth-display').text(`ETH price: $${body[1].price}`);
    }, function(error) {
      $('#show-errors').text(`There was an error processing your request: ${error}`);
    }
  );
    
  $('#crypto-button').click(function (e) {
    e.preventDefault();
    let coin = $('#cryptos').val();
    let interval = $('#convert').val();
    console.log(interval);
    let promise = UserSearch.getUserPrice(coin, interval)
    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(body);
    }, function(error) {
      $('#show-errors').text(`There was an error processing your request: ${error}`);
    }
  );
});
});
