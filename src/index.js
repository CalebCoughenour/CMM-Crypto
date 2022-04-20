import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CryptoSomething from './js/ticker-api.js';

$(document).ready(function() {
 let promise = CryptoSomething.getPrices();
  promise.then(function(response) {
    const body = JSON.parse(response);
    let src = body[0].logo_url;
    console.log(src);
    $('#btc-logo').html("<img src='" + src + "'>");
    $('#btc-display').text(`BTC price: ${body[0].price}`);
    $('#eth-display').text(`ETH price: ${body[1].price}`);
    
  $('#crypto-button').click(function () {
  
 
    
  });
});
})
