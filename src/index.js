import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CryptoSomething from './js/ticker-api.js';
import UserSearch from './js/user-input-api.js';
import CatFact from './js/cat-facts-api.js';
import SimpsonsQuote from './js/simpsons-api.js';

$(document).ready(function() {
 let promise = CryptoSomething.getPrices();
  promise.then(function(response) {
    const body = JSON.parse(response);
    let container = [];
    for (let i = 0; i < body.length; i++) {
      let price = parseFloat(body[i].price).toFixed(2);
      container.push(price);
    }    
    $('#btc-display').html(container[0]);
    $('#eth-display').html(container[1]);
    $('#USDT-display').html(container[2]);
    $('#BNB-display').html(container[3]);
    let src = body[0].logo_url;
    let src1 = body[1].logo_url;
    let src2 = body[2].logo_url;
    let src3 = body[3].logo_url;
    $('#btc-logo').html("<img src='" + src + "'>");
    $('#eth-logo').html("<img src='" + src1 + "'>");
    $('#USDT-logo').html("<img src='" + src2 + "'>");
    $('#BNB-logo').html("<img src='" + src3 + "'>");
    }, function(error) {
      $('#show-errors').text(`There was an error processing your request: ${error}`);
    }
  );
    
  $('#search-form').submit(function (e) {
    e.preventDefault();
    let coin = $('#cryptos').val();
    let interval = $('#interval').val();
    let promise = UserSearch.getUserPrice(coin, interval);
    promise.then(function(response) {
      const body = JSON.parse(response);
      let userPrice = body[0].price;
      let userVolume = body[0][interval].volume;
      let userIntervalPrice = body[0][interval].price_change;
      let userIntervalSimple = parseFloat(userIntervalPrice).toFixed(2);
      let userPriceSimple = parseFloat(userPrice).toFixed(2);
      let userVolumeSimple = parseFloat(userVolume).toFixed(2);
      $('#coin-name').text(`${body[0].name}`);
      $('#coin-price').text(`Current Price: $${userPriceSimple}`);
      $('#price-change').text(`${interval} Price Change: ${userIntervalSimple}`);
      $('#volume').text(`${interval} Volume: ${userVolumeSimple}`);
      $('.card-results').show();
      $('.card-error').hide();
      $('.card-homer').hide(); 
      $('#catFact').text("");
    }, function(error) {
        $('.card-error').show();
        $('#show-errors').text(`There was an error processing your request: ${error}. Please try again.`);
      }
    );
  
  });
  $('#rabbitHole').click(function(e) {
    e.preventDefault();
    let promise = CatFact.getCatFact(); 
      promise.then(function(response) {
      const body = JSON.parse(response);
      $('#catFact').text(`${body.fact}`);
      $('.card-homer').show();   
      $('.card-results').hide();
    }, function(error) {
      $('.card-error').show();
      $('#show-errors').text(`There was an error processing your request: ${error}. Please try again.`);
    });
  $('#homer-gif').click(function(e) {
    e.preventDefault();
    let promise = SimpsonsQuote.getQuote();
      promise.then(function(response) {
        const body = JSON.parse(response);
        console.log(body);
        $('#homer-quote').text(`${body[0].character} quote: "${body[0].quote}"`)  
      }, function(error) {
        $('.card-error').show();
        $('#show-errors').text(`There was an error processing your request: ${error}. Please try again.`);
      })
    })  
  });
});  